"use strict";

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/page/randomPodcast",
      handler: "page.randomPodcast",
      config: {
        auth: false,
      },
    },
  ],
};
