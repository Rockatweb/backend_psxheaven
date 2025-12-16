"use strict";

export default {
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
