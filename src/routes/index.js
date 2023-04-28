const newsRouter = require("./news");
const meRouter = require("./me");
const postRouter = require("./post");
const siteRouter = require("./site");
function route(app) {
  app.use("/news", newsRouter);
  app.use("/me", meRouter);
  app.use("/api/v1/post", postRouter);
  app.use("/", siteRouter);
}

module.exports = route;
