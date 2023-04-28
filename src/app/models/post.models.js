const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema({
  // _id: {type: Schema.Types.ObjectId, require: true},
  user_id: String,
  user_name: { type: String, maxlength: 255 },
  full_name: { type: String, maxlength: 255 },
  user_bio: {type: String, maxlength: 255},
  like_count: Number,
  total_comment: Number,
  profile_pic_url: String,
  friendship_status: {
    following: Boolean,
    outgoing_request: Boolean,
  },
  media:[
    {
      src: String,
      poster: String,
    },
  ],
  comment: [
  {
    text: String,
    created_at: String,
    user:[
      {
        user_comment: [{type: Schema.Types.ObjectId, ref: "User"}]
      },
    ],
    comment_like_count: Number,
    reply: [
      {
        text: String,
        created_at: String,
        user:[
          {
            user_comment: [{type: Schema.Types.ObjectId, ref: "User"}]
          },
        ],
        comment_like_count: Number
      }
    ],
    id: String
  },],
  caption_text: String,
  create_at: Date,
  update_at: Date
});

module.exports = mongoose.model("Post", Post);