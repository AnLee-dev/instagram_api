const Article = require("../models/article.models");

class ArticleController {
  //GET /article/:slug
  show(req, res, next) {
    Article.findOne({ id: req.params.slug })
      .then((article) => {
        res.render("articleDetail/show", article);
      })
      .catch(next);
  }

    //GET /articleDetail/create
  create(req, res, next) {
    res.render('articleDetail/create')
  }

    //POST /articleDetail/store
  store(req, res, next) {
    const data = req.body;
    const content = req.body.content;
    const media = req.body.profile_pic_url;
    const article = new Article(data);
    article.user.username = content;
    article.user.profile_pic_url = media;
    article.save()
        .then(() => res.redirect('/'))
        .catch(next)
  }
}

module.exports = new ArticleController();
