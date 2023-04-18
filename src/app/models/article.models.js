const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Article = new Schema({
  user: {
    id: { type: String, maxlength: 255 },
    username: { type: String, maxlength: 255 },
    full_name: { type: String, maxlength: 255 },
    profile_pic_url: String,
    friendship_status: {
      following: Boolean,
      outgoing_request: Boolean,
    },
  },
  caption_text: String,
  like_count: Number,
  total_comment: Number,
  media: {
    video: [
      {
        id: Number,
        src: String,
        poster: String,
      },
    ],
  },
  id: Number,
});
module.exports = mongoose.model("Article", Article);
