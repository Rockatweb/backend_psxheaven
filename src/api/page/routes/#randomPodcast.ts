"use strict";

export default {
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
