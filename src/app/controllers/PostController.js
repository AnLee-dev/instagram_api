const Post = require("../models/post.models");
const { multipleMongooseToObject } = require('../../util/mongoose')
class PostController {
  //GET /post/:slug
  show(req, res, next) {
    Post.findOne({ id: req.params.slug })
      .then((post) => {
        res.render("post/show", post);
      })
      .catch(next);
  }

  //GET /post/create
  create(req, res, next) {
    res.render("post/create");
  }

  //POST /post/store
  store(req, res, next) {
    const data = req.body;
    const user_name = req.body.user_name;
    const mediaSrc = req.body.media.src;
    const mediaPoster = req.body.media.poster;
    const caption_text = req.body.caption_text;
    const createdAt = Date.now();
    const post = new Post(data);
    post.user_name = user_name;
    post.profile_pic_url = profile_pic_url;
    post
      .save()
      .then((post) => res.send(post))
      .catch(next);
  }

  //UPDATE /post/:id/edit
  edit(req, res, next) {
      Post.findById(req.params.id)
        .then((post) => res.render("post/edit", post))
        .catch(next);
  }

  //PUT /post/:id
  update(req, res, next) {
    const data = req.body;
    const user_name = data.user_name;
    const profile_pic_url = data.profile_pic_url;
    console.log(100000);
      Post.updateOne({ _id: req.params.id }, {user_name: user_name, profile_pic_url: profile_pic_url})
        .then(() => res.send(data))
        .catch(next);
  }

  //DELETE /post/:id
  delete(req, res, next) {
    Post.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new PostController();
