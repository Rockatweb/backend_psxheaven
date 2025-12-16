"use strict";

export default {
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
