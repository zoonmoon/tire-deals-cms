import type { Schema, Struct } from '@strapi/strapi';

export interface HeroSlideHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_hero_slide_hero_slides';
  info: {
    displayName: 'Hero Slide';
  };
  attributes: {
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Sublabel: Schema.Attribute.Text;
    SubLabel2: Schema.Attribute.String;
    Title: Schema.Attribute.String;
    Title2: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_s';
  info: {
    displayName: 'Hero ';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hero-slide.hero-slide': HeroSlideHeroSlide;
      'shared.hero': SharedHero;
    }
  }
}
