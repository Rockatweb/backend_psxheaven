"use strict";

export default {
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
