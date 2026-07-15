const allowedMediaTypes = [
  'image/*',
  'video/*',
  'audio/*',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.*',
  'text/plain',
  'text/csv',
];

const deniedExecutableTypes = [
  'application/vnd.microsoft.portable-executable',
  'application/x-msdownload',
  'application/x-msdos-program',
  'application/x-executable',
  'application/x-dosexec',
  'application/x-sh',
  'text/x-shellscript',
  'application/x-mach-binary',
];


module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtManagement: 'refresh',
      sessions: {
        httpOnly: true,
      },
    },
  },



  // upload: {
  //   config: {
  //     security: {
  //       allowedTypes: allowedMediaTypes,
  //       deniedTypes: deniedExecutableTypes,
  //     },
  //   },
  // },


  upload: {
    config: {
      provider: "@strapi/provider-upload-aws-s3",
      providerOptions: {
        baseUrl: env("DO_SPACE_BASE_URL"),
        s3Options: {
          credentials: {
            accessKeyId: env("DO_SPACES_ACCESS_KEY_ID"),
            secretAccessKey: env("DO_SPACES_ACCESS_KEY_SECRET"),
          },
          endpoint: env("DO_SPACE_ENDPOINT"),
          region: env("DO_SPACE_REGION"),
          forcePathStyle: false,
        },
        params: {
          Bucket: env("DO_SPACE_BUCKET"),
        },
      },
    },
  },





});
