'use strict';

function generateSlug(title) {
  return title
    .toString()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

module.exports = {
  register({ strapi }) {
    strapi.documents.use(async (context, next) => {
      if (
        context.uid !== 'api::blog-post.blog-post' ||
        context.action !== 'create'
      ) {
        return next();
      }

      // 
      const title = context.params?.data?.Title;

      if (title) {
        const baseSlug = generateSlug(title);

        let slug = baseSlug;
        let counter = 2;

        while (true) {
          const existingBlogs = await strapi.documents(
            'api::blog-post.blog-post'
          ).findMany({
            filters: {
              slug: {
                $eq: slug,
              },
            },
            limit: 1,
          });

          if (existingBlogs.length === 0) {
            break;
          }

          slug = `${baseSlug}-${counter}`;
          counter++;
        }

        context.params.data.slug = slug;
      }

      return next();
      
    });
  },

  bootstrap(/* { strapi } */) {},
};