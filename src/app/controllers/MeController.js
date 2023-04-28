const { multipleMongooseToObject } = require("../../util/mongoose");
const Post = require("../models/post.models");

class MeController {
  //POST /me/my-post
  storedPost(req, res, next) {
    Post.find({})
      .then((post) => {
        res.render("me/stored-post", {post: multipleMongooseToObject(post)})
      })
      .catch(next);
  }
}

module.exports = new MeController();
