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
    res.render("articleDetail/create");
  }

  //POST /articleDetail/store
  store(req, res, next) {
    const data = req.body;
    const username = req.body.username;
    const profile_pic_url = req.body.profile_pic_url;
    const article = new Article(data);
    article.user.username = username;
    article.user.profile_pic_url = profile_pic_url;
    article
      .save()
      .then(() => res.redirect("/"))
      .catch(next);
  }

  //UPDATE /articleDetail/:id/edit
  edit(req, res, next) {
    Article.findById(req.params.id)
      .then((article) => res.render("articleDetail/edit", article))
      .catch(next);
  }

  //PUT /articleDetail/:id
  update(req, res, next) {
    const username = req.body.username;
    const profile_pic_url = req.body.profile_pic_url;
    console.log(username + " + "+ profile_pic_url);
    Article.updateOne({ _id: req.params.id }, {user: {username: username, profile_pic_url: profile_pic_url}})
      .then(() => res.redirect("/me/my-article"))
      .catch(next);
  }

  //DELETE /articleDetail/:id
  delete(req, res, next) {
    Article.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new ArticleController();
