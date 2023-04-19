const newsRouter = require("./news");
const articleDetailRouter = require("./article");
const siteRouter = require("./site");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/article", articleDetailRouter);
  app.use("/", siteRouter);
}

module.exports = route;
