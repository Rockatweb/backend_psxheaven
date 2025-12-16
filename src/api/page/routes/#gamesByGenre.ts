"use strict";

export default {
  routes: [
    {
      method: "GET",
      path: "/page/gamesByGenre/:id",
      handler: "page.gamesByGenre",
      config: {
        auth: false,
      },
    },
  ],
};
