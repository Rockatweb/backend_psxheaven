/**
 * page router
 */

export default {
    routes: [
        // start
        {
            method: "GET",
            path: "/page/start",
            handler: "page.start",
            config: { auth: false },
        },

        // customPage
        {
            method: "GET",
            path: "/page/customPage/:type/:page/:items?",
            handler: "page.customPage",
            config: { auth: false },
        },

        // gamesByGenre
        {
            method: "GET",
            path: "/page/gamesByGenre/:genre/:page/:items?",
            handler: "page.gamesByGenre",
            config: { auth: false },
        },

        // getCategory
        {
            method: "GET",
            path: "/page/getCategory/:slug",
            handler: "page.getCategory",
            config: { auth: false },
        },

        // lexicon
        {
            method: "GET",
            path: "/page/lexicon/:letter",
            handler: "page.lexicon",
            config: { auth: false },
        },

        // randomBlog
        {
            method: "GET",
            path: "/page/randomBlog",
            handler: "page.randomBlog",
            config: { auth: false },
        },

        // randomGame
        {
            method: "GET",
            path: "/page/randomGame",
            handler: "page.randomGame",
            config: { auth: false },
        },

        // randomMagazin
        {
            method: "GET",
            path: "/page/randomMagazin",
            handler: "page.randomMagazin",
            config: { auth: false },
        },

        // randomPodcast
        {
            method: "GET",
            path: "/page/randomPodcast",
            handler: "page.randomPodcast",
            config: { auth: false },
        },
    ],
};
