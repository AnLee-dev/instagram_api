const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema({
  user_id: String,
  user_name: { type: String, maxlength: 255 },
  profile_pic_url: String,
  post_id: [{type: Schema.Types.ObjectId, ref: 'Post'}],
  content: String,
  friendship_status: {
    following: Boolean,
    outgoing_request: Boolean,
  },
  caption_text: String,
  like_count: Number,
  total_comment: Number,
  reply_comments:[
      {
        user_id: String,
        user_name: { type: String, maxlength: 255 },
        profile_pic_url: String,
        content: 'reply_comment',
        create_at: Date,
        update_at: Date
      },
    ],
  create_at: Date,
  update_at: Date
});

module.exports = mongoose.model("Comment", Comment);