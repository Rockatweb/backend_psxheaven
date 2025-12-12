"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/page/start/:page/:items?",
      handler: "page.start",
      config: {
        auth: false,
      },
    },
  ],
};
