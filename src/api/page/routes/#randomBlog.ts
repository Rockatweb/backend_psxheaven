"use strict";

export default {
  routes: [
    {
      method: "GET",
      path: "/page/randomBlog",
      handler: "page.randomBlog",
      config: {
        auth: false,
      },
    },
  ],
};
