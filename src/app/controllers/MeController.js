const { multipleMongooseToObject } = require("../../util/mongoose");
const Article = require("../models/article.models");

class MeController {
  //POST /me/my-article
  storedArticle(req, res, next) {
    Article.find({})
      .then((article) => {
        res.render("me/stored-article", {article: multipleMongooseToObject(article)})
      })
      .catch(next);
  }
}

module.exports = new MeController();
