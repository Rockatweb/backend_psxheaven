import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsContentType extends Struct.ComponentSchema {
  collectionName: 'components_components_content_types';
  info: {
    description: '';
    displayName: 'contentType';
    icon: 'bulletList';
  };
  attributes: {
    type: Schema.Attribute.Enumeration<
      ['start', 'blog', 'games', 'gameslist', 'podcast', 'lexicon']
    >;
  };
}

export interface ComponentsHeadline extends Struct.ComponentSchema {
  collectionName: 'components_components_headlines';
  info: {
    description: '';
    displayName: 'headline';
    icon: 'bulletList';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    headline: Schema.Attribute.String;
    tab_id: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['h2', 'h3', 'h4']> &
      Schema.Attribute.DefaultTo<'h2'>;
    width: Schema.Attribute.Enumeration<
      [
        'width_12.5',
        'width_25',
        'width_37.5',
        'width_50',
        'width_62.5',
        'width_75',
        'width_87.5',
        'width_100',
      ]
    > &
      Schema.Attribute.DefaultTo<'width_100'>;
  };
}

export interface ComponentsHorizontalRow extends Struct.ComponentSchema {
  collectionName: 'components_components_horizontal_rows';
  info: {
    description: '';
    displayName: 'HorizontalRow';
    icon: 'arrowRight';
  };
  attributes: {
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    width: Schema.Attribute.Enumeration<
      [
        'width_12.5',
        'width_25',
        'width_37.5',
        'width_50',
        'width_62.5',
        'width_75',
        'width_87.5',
        'width_100',
      ]
    > &
      Schema.Attribute.DefaultTo<'width_100'>;
  };
}

export interface ComponentsImage extends Struct.ComponentSchema {
  collectionName: 'components_components_images';
  info: {
    description: '';
    displayName: 'image';
    icon: 'folder';
  };
  attributes: {
    caption: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    effect: Schema.Attribute.Enumeration<
      ['none', 'parallax', 'zoom', 'opacity']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    float: Schema.Attribute.Enumeration<['none', 'left', 'right']> &
      Schema.Attribute.DefaultTo<'none'>;
    gallery: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    imageWidth: Schema.Attribute.Enumeration<
      [
        'width_12.5',
        'width_25',
        'width_33',
        'width_37.5',
        'width_50',
        'width_62.5',
        'width_66',
        'width_75',
        'width_87.5',
        'width_100',
      ]
    > &
      Schema.Attribute.DefaultTo<'width_25'>;
    lightbox: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.String;
    position: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    quality: Schema.Attribute.Enumeration<['q_25', 'q_50', 'q_75', 'q_100']> &
      Schema.Attribute.DefaultTo<'q_50'>;
    slider: Schema.Attribute.Enumeration<
      ['clean', 'with_thumbnails', 'with_bubbles']
    > &
      Schema.Attribute.DefaultTo<'clean'>;
    tab_id: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
    width: Schema.Attribute.Enumeration<
      [
        'width_12.5',
        'width_25',
        'width_33',
        'width_37.5',
        'width_50',
        'width_62.5',
        'width_66',
        'width_75',
        'width_87.5',
        'width_100',
      ]
    > &
      Schema.Attribute.DefaultTo<'width_100'>;
  };
}

export interface ComponentsLinkedGames extends Struct.ComponentSchema {
  collectionName: 'components_components_linked_games';
  info: {
    displayName: 'linkedGames';
    icon: 'apps';
  };
  attributes: {
    linkedGames: Schema.Attribute.Relation<'oneToMany', 'api::page.page'>;
  };
}

export interface ComponentsMultiplePlaylists extends Struct.ComponentSchema {
  collectionName: 'components_components_multiple_playlists';
  info: {
    description: '';
    displayName: 'multiplePlaylists';
    icon: 'apps';
  };
  attributes: {
    multiplePlaylists: Schema.Attribute.Component<'components.playlist', true>;
    tab_id: Schema.Attribute.String;
  };
}

export interface ComponentsMultipleVideos extends Struct.ComponentSchema {
  collectionName: 'components_components_multiple_videos';
  info: {
    description: '';
    displayName: 'multipleVideos';
    icon: 'apps';
  };
  attributes: {
    multipleVideos: Schema.Attribute.Component<'components.video', true>;
    tab_id: Schema.Attribute.String;
    width: Schema.Attribute.Enumeration<
      [
        'width_12.5',
        'width_25',
        'width_37.5',
        'width_50',
        'width_62.5',
        'width_75',
        'width_87.5',
        'width_100',
      ]
    > &
      Schema.Attribute.DefaultTo<'width_100'>;
  };
}

export interface ComponentsOpener extends Struct.ComponentSchema {
  collectionName: 'components_components_openers';
  info: {
    description: '';
    displayName: 'opener';
    icon: 'dashboard';
  };
  attributes: {
    image: Schema.Attribute.Component<'components.image', false>;
    intro: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3OTcxMTk5OTksImp0aSI6IjE2NzUwM2I1LTY0NjktNDA1Ni1iZTk4LTlkM2I4MmUyMjNhMSIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyJdLCJyZW1vdmVGZWF0dXJlcyI6WyJQQiIsIlJGIiwiU0NIIiwiVENQIiwiVEwiLCJUQ1IiLCJJUiIsIlNVQSIsIkI2NEEiLCJMUCIsIkhFIiwiUkVEIiwiUEZPIiwiV0MiLCJGQVIiLCJCS00iLCJGUEgiLCJNUkUiXSwidmMiOiI2NWE2MjRmZiJ9.sCwI3xAjQZ7Xv9TIioMCjyeb0AIoWS0MKMy8-A6mBZBmHMLlOVF-dbQJ0WhOu5N506ng-t0y_psGUTFyWDaGyg';
          output: 'HTML';
          preset: 'light';
        }
      >;
    richtext: Schema.Attribute.Component<'components.richtext', false>;
    sidebar: Schema.Attribute.Relation<
      'oneToOne',
      'api::game-detail.game-detail'
    >;
  };
}

export interface ComponentsPlaylist extends Struct.ComponentSchema {
  collectionName: 'components_components_playlists';
  info: {
    description: '';
    displayName: 'playlist';
    icon: 'bulletList';
  };
  attributes: {
    itemsPerPage: Schema.Attribute.Enumeration<
      ['all_items', 'items_1', 'items_2', 'items_3', 'items_6', 'items_9']
    >;
    Name: Schema.Attribute.String;
    playlist: Schema.Attribute.String;
    tab_id: Schema.Attribute.String;
    width: Schema.Attribute.Enumeration<
      [
        'width_12.5',
        'width_25',
        'width_37.5',
        'width_50',
        'width_62.5',
        'width_75',
        'width_87.5',
        'width_100',
      ]
    >;
  };
}

export interface ComponentsRating extends Struct.ComponentSchema {
  collectionName: 'components_components_ratings';
  info: {
    description: '';
    displayName: 'rating';
    icon: 'crown';
  };
  attributes: {
    gameplay_rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    gameplay_text: Schema.Attribute.String;
    graphics_rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    graphics_text: Schema.Attribute.String;
    rating_text: Schema.Attribute.Blocks;
    sound_rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    sound_text: Schema.Attribute.String;
    story_rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
        },
        number
      > &
      Schema.Attribute.DefaultTo<0>;
    story_text: Schema.Attribute.String;
  };
}

export interface ComponentsRichText extends Struct.ComponentSchema {
  collectionName: 'components_components_rich_texts';
  info: {
    displayName: 'richText';
    icon: 'apps';
  };
  attributes: {
    richText: Schema.Attribute.Blocks;
    test: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3OTcxMTk5OTksImp0aSI6IjE2NzUwM2I1LTY0NjktNDA1Ni1iZTk4LTlkM2I4MmUyMjNhMSIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyJdLCJyZW1vdmVGZWF0dXJlcyI6WyJQQiIsIlJGIiwiU0NIIiwiVENQIiwiVEwiLCJUQ1IiLCJJUiIsIlNVQSIsIkI2NEEiLCJMUCIsIkhFIiwiUkVEIiwiUEZPIiwiV0MiLCJGQVIiLCJCS00iLCJGUEgiLCJNUkUiXSwidmMiOiI2NWE2MjRmZiJ9.sCwI3xAjQZ7Xv9TIioMCjyeb0AIoWS0MKMy8-A6mBZBmHMLlOVF-dbQJ0WhOu5N506ng-t0y_psGUTFyWDaGyg';
          output: 'HTML';
          preset: 'light';
        }
      >;
  };
}

export interface ComponentsRichtext extends Struct.ComponentSchema {
  collectionName: 'components_components_richtexts';
  info: {
    description: '';
    displayName: 'richtext';
    icon: 'apps';
  };
  attributes: {
    richtext: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3OTcxMTk5OTksImp0aSI6IjE2NzUwM2I1LTY0NjktNDA1Ni1iZTk4LTlkM2I4MmUyMjNhMSIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCIsIkUyUCIsIkUyVyJdLCJyZW1vdmVGZWF0dXJlcyI6WyJQQiIsIlJGIiwiU0NIIiwiVENQIiwiVEwiLCJUQ1IiLCJJUiIsIlNVQSIsIkI2NEEiLCJMUCIsIkhFIiwiUkVEIiwiUEZPIiwiV0MiLCJGQVIiLCJCS00iLCJGUEgiLCJNUkUiXSwidmMiOiI2NWE2MjRmZiJ9.sCwI3xAjQZ7Xv9TIioMCjyeb0AIoWS0MKMy8-A6mBZBmHMLlOVF-dbQJ0WhOu5N506ng-t0y_psGUTFyWDaGyg';
          output: 'HTML';
          preset: 'light';
        }
      >;
    tab_id: Schema.Attribute.String;
    verticalPosition: Schema.Attribute.Enumeration<
      ['top', 'center', 'bottom']
    > &
      Schema.Attribute.DefaultTo<'top'>;
    width: Schema.Attribute.Enumeration<
      [
        'width_12.5',
        'width_25',
        'width_37.5',
        'width_50',
        'width_62.5',
        'width_75',
        'width_87.5',
        'width_100',
      ]
    > &
      Schema.Attribute.DefaultTo<'width_100'>;
  };
}

export interface ComponentsTabbox extends Struct.ComponentSchema {
  collectionName: 'components_components_tabboxes';
  info: {
    description: '';
    displayName: 'tabbox';
    icon: 'expand';
  };
  attributes: {
    tab: Schema.Attribute.Component<'tab.tab', true>;
    width: Schema.Attribute.Enumeration<
      [
        'width_12.5',
        'width_25',
        'width_37.5',
        'width_50',
        'width_62.5',
        'width_75',
        'width_87.5',
        'width_100',
      ]
    >;
  };
}

export interface ComponentsVideo extends Struct.ComponentSchema {
  collectionName: 'components_components_videos';
  info: {
    description: '';
    displayName: 'video';
    icon: 'cube';
  };
  attributes: {
    Caching: Schema.Attribute.Enumeration<
      ['Daily', 'Weekly', 'Monthly', 'Quarterly']
    > &
      Schema.Attribute.DefaultTo<'Quarterly'>;
    name: Schema.Attribute.String;
    tab_id: Schema.Attribute.String;
    video: Schema.Attribute.String;
    width: Schema.Attribute.Enumeration<
      [
        'width_12.5',
        'width_25',
        'width_37.5',
        'width_50',
        'width_62.5',
        'width_75',
        'width_87.5',
        'width_100',
      ]
    > &
      Schema.Attribute.DefaultTo<'width_25'>;
  };
}

export interface ComponentsVideoByGameGenre extends Struct.ComponentSchema {
  collectionName: 'components_components_video_by_game_genres';
  info: {
    displayName: 'VideoByGameGenre';
    icon: 'apps';
  };
  attributes: {
    genre: Schema.Attribute.Relation<'oneToOne', 'api::genre.genre'>;
  };
}

export interface DetailsCustom extends Struct.ComponentSchema {
  collectionName: 'components_details_customs';
  info: {
    displayName: 'custom';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DetailsDevelopers extends Struct.ComponentSchema {
  collectionName: 'components_details_developers';
  info: {
    description: '';
    displayName: 'developer';
    icon: 'bulletList';
  };
  attributes: {
    developer: Schema.Attribute.Relation<
      'oneToMany',
      'api::developer.developer'
    >;
  };
}

export interface DetailsGamemodes extends Struct.ComponentSchema {
  collectionName: 'components_details_gamemodes';
  info: {
    description: '';
    displayName: 'Gamemode';
    icon: 'bulletList';
  };
  attributes: {
    gamemode: Schema.Attribute.Relation<'oneToMany', 'api::gamemode.gamemode'>;
  };
}

export interface DetailsGenres extends Struct.ComponentSchema {
  collectionName: 'components_details_genres';
  info: {
    description: '';
    displayName: 'genre';
    icon: 'bulletList';
  };
  attributes: {
    genre: Schema.Attribute.Relation<'oneToMany', 'api::genre.genre'>;
  };
}

export interface DetailsHeadline extends Struct.ComponentSchema {
  collectionName: 'components_details_headlines';
  info: {
    description: '';
    displayName: 'headline';
    icon: 'bulletList';
  };
  attributes: {
    headline: Schema.Attribute.Enumeration<
      [
        'Details',
        'Entwicklung',
        'Sonstiges',
        'Wissenswertes',
        'Ver\u00F6ffentlichung',
        'Podcast',
      ]
    >;
  };
}

export interface DetailsLink extends Struct.ComponentSchema {
  collectionName: 'components_details_links';
  info: {
    displayName: 'link';
    icon: 'arrowRight';
  };
  attributes: {
    name: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<['_blank', '_self']>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface DetailsOriginalPrice extends Struct.ComponentSchema {
  collectionName: 'components_details_original_prices';
  info: {
    displayName: 'original Price';
    icon: 'feather';
  };
  attributes: {
    price: Schema.Attribute.String;
  };
}

export interface DetailsPublishers extends Struct.ComponentSchema {
  collectionName: 'components_details_publishers';
  info: {
    description: '';
    displayName: 'publisher';
    icon: 'bulletList';
  };
  attributes: {
    publisher: Schema.Attribute.Relation<
      'oneToMany',
      'api::publisher.publisher'
    >;
  };
}

export interface DetailsRelease extends Struct.ComponentSchema {
  collectionName: 'components_details_releases';
  info: {
    description: '';
    displayName: 'release';
    icon: 'bulletList';
  };
  attributes: {
    date: Schema.Attribute.Date;
    price: Schema.Attribute.String;
    region: Schema.Attribute.Enumeration<['PAL', 'NTSC', 'NTSC-J']>;
  };
}

export interface IdsIDs extends Struct.ComponentSchema {
  collectionName: 'components_ids_i_ds';
  info: {
    description: '';
    displayName: 'IDs';
  };
  attributes: {
    region: Schema.Attribute.Enumeration<['ntsc', 'ntsc-j', 'pal', 'global']>;
    Serialnumber: Schema.Attribute.String;
  };
}

export interface LogoLogo extends Struct.ComponentSchema {
  collectionName: 'components_logo_logos';
  info: {
    displayName: 'logo';
    icon: 'attachment';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    position: Schema.Attribute.Enumeration<['left', 'center', 'right']>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface StreamplanStream extends Struct.ComponentSchema {
  collectionName: 'components_streamplan_streams';
  info: {
    description: '';
    displayName: 'stream';
    icon: 'clock';
  };
  attributes: {
    day: Schema.Attribute.Enumeration<
      ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']
    >;
    from: Schema.Attribute.Time;
    games: Schema.Attribute.Relation<'oneToMany', 'api::game.game'>;
    skipNextStream: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    to: Schema.Attribute.Time;
  };
}

export interface TabTab extends Struct.ComponentSchema {
  collectionName: 'components_tab_tabs';
  info: {
    displayName: 'tab';
    icon: 'expand';
  };
  attributes: {
    label: Schema.Attribute.String;
    tab_id: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.content-type': ComponentsContentType;
      'components.headline': ComponentsHeadline;
      'components.horizontal-row': ComponentsHorizontalRow;
      'components.image': ComponentsImage;
      'components.linked-games': ComponentsLinkedGames;
      'components.multiple-playlists': ComponentsMultiplePlaylists;
      'components.multiple-videos': ComponentsMultipleVideos;
      'components.opener': ComponentsOpener;
      'components.playlist': ComponentsPlaylist;
      'components.rating': ComponentsRating;
      'components.rich-text': ComponentsRichText;
      'components.richtext': ComponentsRichtext;
      'components.tabbox': ComponentsTabbox;
      'components.video': ComponentsVideo;
      'components.video-by-game-genre': ComponentsVideoByGameGenre;
      'details.custom': DetailsCustom;
      'details.developers': DetailsDevelopers;
      'details.gamemodes': DetailsGamemodes;
      'details.genres': DetailsGenres;
      'details.headline': DetailsHeadline;
      'details.link': DetailsLink;
      'details.original-price': DetailsOriginalPrice;
      'details.publishers': DetailsPublishers;
      'details.release': DetailsRelease;
      'ids.i-ds': IdsIDs;
      'logo.logo': LogoLogo;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'streamplan.stream': StreamplanStream;
      'tab.tab': TabTab;
    }
  }
}
