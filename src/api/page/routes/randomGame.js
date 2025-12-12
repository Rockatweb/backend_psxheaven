"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/page/randomGame",
      handler: "page.randomGame",
      config: {
        auth: false,
      },
    },
  ],
};
