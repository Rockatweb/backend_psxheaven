"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/page/lexicon",
      handler: "page.getLexicon",
      config: {
        auth: false,
      },
    },
  ],
};
