import { factories } from '@strapi/strapi';

const NUMBER_OF_ENTRIES = 1;

export default factories.createCoreController(
  'api::page.page',
  ({ strapi }) => ({

    async randomByType(ctx) {
      const { type, extraFilters = {} } = ctx.params; // oder ctx.request.body/query

      const entries = await strapi.entityService.findMany(
        'api::page.page',
        {
          filters: {
            type,
            live: true,
            ...extraFilters,
          },
          populate: 'deep',
        }
      );

      const entriesArray = Array.isArray(entries) ? entries : [entries];

      if (!entriesArray || entriesArray.length === 0) {
        ctx.body = [];
        return;
      }

      const randomEntries = [...entriesArray].sort(() => 0.5 - Math.random());

      ctx.body = randomEntries.slice(0, NUMBER_OF_ENTRIES);
    },

    async randomGame(ctx) {
      ctx.body = await this.randomByType('Game');
    },

    async randomMagazin(ctx) {
      ctx.body = await this.randomByType('Magazin');
    },

    async randomPodcast(ctx) {
      ctx.body = await this.randomByType('Podcast');
    },

    async randomBlog(ctx) {
      ctx.body = await this.randomByType('Blog', {
        slug: { $ne: 'blog' },
      });
    },

    /* ------------------------------------------------ */
    /* START / PAGINATION                               */
    /* ------------------------------------------------ */

    async start(ctx) {
      const page = Number(ctx.params.page) || 1;
      const pageSize = Number(ctx.params.items) || 10;

      const [data, total] = await strapi.db
                                        .query('api::page.page')
                                        .findWithCount({
                                          where: {
                                            type: {
                                              $notIn: [
                                                'Start',
                                                'Blogpage',
                                                'Spieleliste',
                                                'Tipps',
                                                'Podcasts',
                                                'Games',
                                              ],
                                            },
                                            slug: {
                                              $notIn: ['', 'lexicon', 'magazine'],
                                            },
                                            live: true,
                                          },
                                          populate: true,
                                          orderBy: { publishedAt: 'desc' },
                                          offset: (page - 1) * pageSize,
                                          limit: pageSize,
                                        });

      ctx.body = {
        data,
        meta: {
          pagination: {
            page,
            pageSize,
            pageCount: Math.ceil(total / pageSize),
            total,
          },
        },
      };
    },

    /* ------------------------------------------------ */
    /* CUSTOM PAGE BY TYPE                               */
    /* ------------------------------------------------ */

    async customPage(ctx) {
      const page = Number(ctx.params.page) || 1;
      const pageSize = Number(ctx.params.items) || 10;
      const type = ctx.params.type;

      const [data, total] = await strapi.db
                                        .query('api::page.page')
                                        .findWithCount({
                                          where: {
                                            type,
                                            live: true,
                                          },
                                          populate: true,
                                          orderBy: { publishedAt: 'desc' },
                                          offset: (page - 1) * pageSize,
                                          limit: pageSize,
                                        });

      ctx.body = {
        data,
        meta: {
          pagination: {
            page,
            pageSize,
            pageCount: Math.ceil(total / pageSize),
            total,
          },
        },
      };
    },

    /* ------------------------------------------------ */
    /* LEXICON                                          */
    /* ------------------------------------------------ */

    async getLexicon(ctx) {
      ctx.body = await strapi.entityService.findMany(
        'api::page.page',
        {
          fields: ['title', 'slug', 'type', 'lexicon'],
          filters: {
            lexicon: true,
            live: true,
            category: { $ne: '' },
            publishedAt: { $notNull: true },
          },
          populate: {
            IDs: true,
            category: { fields: ['name'] },
            parent: {
              fields: ['id', 'slug', 'title', 'type', 'lexicon'],
            },
          },
        }
      );
    },

    /* ------------------------------------------------ */
    /* GAMES BY GENRE                                   */
    /* ------------------------------------------------ */

    async gamesByGenre(ctx) {
      const id = ctx.params.id;

      ctx.body = await strapi.entityService.findMany(
        'api::game.game',
        {
          fields: ['name', 'dateDone'],
          filters: {
            genres: { id },
            live: true,
            publishedAt: { $notNull: true },
            playlist: { $ne: '' },
            YTStart: { $lte: new Date() },
          },
          populate: {
            playlist: {
              fields: ['name', 'video', 'width', 'Caching'],
            },
            parent: {
              fields: ['id', 'slug', 'title', 'type'],
            },
          },
          sort: ['YTStart:desc'],
        }
      );
    },

    /* ------------------------------------------------ */
    /* CATEGORIES                                       */
    /* ------------------------------------------------ */

    async getSingleCategory(ctx) {
      const category = ctx.params.category;

      const data = await strapi.entityService.findMany(
        `api::${category}.${category}`,
        {
          fields: ['id', 'name', 'slug'],
        }
      );

      ctx.body = { attributes: { categories: data } };
    },

  })
);
