const Post = require("../models/post.models");
const { multipleMongooseToObject } = require('../../util/mongoose')
class SiteController {
  //[GET] /home
  home(req, res, next) {
    Post.find({})
      .then(post => {
        res.render('home', {post: multipleMongooseToObject(post)})
      })
      .catch(next)
  }

  //[GET] search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
