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
    const userName = req.body.username;
    const captionText = req.body.caption_text;
    const fullName = req.body.full_name;
    const article = new Article(data);
    article.user.username = userName;
    article.user.profile_pic_url = fullName;
    article.caption_text = captionText;
    console.log('article', article);
    article.save()
        .then(() => res.redirect('/'))
        .catch(next)
  }
}

module.exports = new ArticleController();
