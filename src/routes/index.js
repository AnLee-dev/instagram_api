const newsRouter = require("./news");
const meRouter = require("./me");
const articleDetailRouter = require("./article");
const siteRouter = require("./site");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/me", meRouter);
  app.use("/article", articleDetailRouter);

  app.use("/", siteRouter);
}

module.exports = route;
