'use strict';

/**
 *  page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::page.page', ({ strapi }) => {
  const numberOfEntries = 1;
  return {
    async randomGame(ctx) {
      const entries = await strapi.documents('api::page.page').findMany({
        filters: {
          type: {
            $in: 'Game'
          },
          live: {
            $eq: true
          }
        },
        populate: 'deep',
      });

      const randomEntries = [...entries].sort(() => 0.5 - Math.random());
      ctx.body = randomEntries.slice(0, numberOfEntries);
    },
    async randomMagazin(ctx) {
      const entries = await strapi.documents('api::page.page').findMany({
        filters: {
          type: {
            $in: 'Magazin'
          },
          live: {
            $eq: true
          }
        },
        populate: 'deep',
      });

      const randomEntries = [...entries].sort(() => 0.5 - Math.random());
      ctx.body = randomEntries.slice(0, numberOfEntries);
    },
    async randomBlog(ctx) {
      const entries = await strapi.documents('api::page.page').findMany({
        filters: {
          type: {
            $in: 'Blog'
          },
          slug: {
            $nei: 'blog'
          },
          live: {
            $eq: true
          }
        },
        populate: 'deep',
      });

      const randomEntries = [...entries].sort(() => 0.5 - Math.random());
      ctx.body = randomEntries.slice(0, numberOfEntries);
    },
    async randomPodcast(ctx) {
      const entries = await strapi.documents('api::page.page').findMany({
        filters: {
          type: {
            $in: 'Podcast'
          },
          live: {
            $eq: true
          }
        },
        populate: 'deep',
      });

      const randomEntries = [...entries].sort(() => 0.5 - Math.random());
      ctx.body = randomEntries.slice(0, numberOfEntries);
    },
    async start(ctx) {
      const page = parseInt(ctx.params.page, 10) || 1;
      const itemsPerPage = ctx.params.items || 10;

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
            orderBy: {
              publishedAt: 'desc',
            },
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
    async customPage(ctx) {
      const itemsPerPage = ctx.params.items || 10;

      ctx.body = await strapi.entityService.findPage(
        'api::page.page',
        {
          page: parseInt(ctx.params.page, 10) || 1,
          pageSize: itemsPerPage,
          filters: {
            type: {
              $eqi: ctx.params.type
            },
            live: {
              $eq: true
            }
          },
          populate: 'deep',
          sort: 'publishedAt:desc'
        }
      );
    },
    async getLexicon(ctx) {
      ctx.body = await strapi.documents('api::page.page').findMany({
        fields: ['title', 'slug', 'type', 'lexicon'],
        filters: {
          lexicon: {
            $in: true
          },
          live: {
            $eq: true
          },
          category: {
            $nei: '',
          },
          publishedAt: {
            $nei: ''
          }
        },
        populate: {
          IDs: true,
          category: {
            fields: ['name']
          },
          parent: {
            fields: ['id', 'slug', 'title', 'type', 'lexicon'],
          }
        },
      });
    },
    async gamesByGenre(ctx) {
      const id = ctx.params.id;

      ctx.body = await strapi.documents('api::game.game').findMany({
        fields: ['name', 'dateDone'],
        filters: {
          genres: {
            $in: id
          },
          live: {
            $eq: true
          },
          publishedAt: {
            $nei: ''
          },
          playlist: {
            $nei: ''
          },
          YTStart: {
            $lte: new Date(),
          }
        },
        populate: {
          IDs: true,
          playlist: {
            fields: ['name', 'video', 'width', 'Caching']
          },
          parent: {
            fields: ['id', 'slug', 'title', 'type'],
          }
        },
        sort: 'YTStart:desc'
      });
    },
    async getCategory(ctx) {
      const slug = ctx.params.slug;
      const category = ctx.params.category;

      if (['developer', 'gamemode', 'genre', 'publisher'].includes(category)) {
        let data = {};
        const entry = await strapi.documents(`api::${category}.${category}`).findMany({
          fields: ['id', 'name', 'slug'],
          filters: {
            slug: {
              $in: slug
            }
          },
        });

        if (entry && entry.length > 0) {
          data = entry[0];
        }

        const games = await strapi.documents('api::page.page').findMany({
          fields: ['id', 'title', 'type', 'slug'],
          filters: {
            type: 'Game',
            opener: {
              sidebar: {
                $notNull: true
              }
            },
            live: {
              $eq: true
            },
          },
          populate: {
            opener: {
              populate: {
                image: {
                  populate: '*'
                },
                sidebar: {
                  fields: ['id'],
                  populate: {
                    data: {
                      on: {
                        [`details.${category}s`]: {
                          populate: {
                            [category]: {
                              fields: ['id', 'name', 'slug']
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        });

        const filtered = games.filter(game => game.opener.sidebar.data.filter(d => d.__component === `details.${category}s` && d[category].filter(dev => dev.slug === slug).length > 0).length > 0);

        if (filtered && filtered.length > 0) {
          data.games = filtered;
        }

        data.type = category;

        ctx.body = {
          attributes: data
        };
      } else {
        ctx.status = 404;
      }

    },
    async getSingleCategory(ctx) {
      const category = ctx.params.category;

      const data = await strapi.documents(`api::${category}.${category}`).findMany({
        fields: ['id', 'name', 'slug'],
      });

      ctx.body = {
        attributes: {
          categories: data
        }
      };
    }
  };
});
