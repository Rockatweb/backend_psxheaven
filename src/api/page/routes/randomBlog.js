"use strict";

module.exports = {
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
