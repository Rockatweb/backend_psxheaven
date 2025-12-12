"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/page/randomMagazin",
      handler: "page.randomMagazin",
      config: {
        auth: false,
      },
    },
  ],
};
