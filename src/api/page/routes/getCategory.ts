"use strict";

export default {
  routes: [
    {
      method: "GET",
      path: "/category/:category",
      handler: "page.getSingleCategory",
      config: {
        auth: false,
      },
    },
    {
      method: "GET",
      path: "/category/:category/:slug",
      handler: "page.getCategory",
      config: {
        auth: false,
      },
    },
  ],
};
