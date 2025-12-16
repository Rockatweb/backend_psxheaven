"use strict";

export default {
  routes: [
    {
      method: "GET",
      path: "/page/customPage/:type/:page/:items?",
      handler: "page.customPage",
      config: {
        auth: false,
      },
    },
  ],
};
