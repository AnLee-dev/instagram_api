const Article = require("../models/article.models");
const { multipleMongooseToObject } = require('../../util/mongoose')
class SiteController {
  //[GET] /home
  home(req, res, next) {
    Article.find({})
      .then(article => {
        res.render('home', {article: multipleMongooseToObject(article)})
      })
      .catch(next)
  }

  //[GET] search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
