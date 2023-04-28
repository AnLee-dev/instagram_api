const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  // _id: {type: Schema.Types.ObjectId, require: true},
  user_name: { type: String, maxlength: 255 },
  full_name: { type: String, maxlength: 255 },
  profile_pic_url: String,
  user_bio: {type: String, maxlength: 255},
  friendship_status: {
    following: Boolean,
    outgoing_request: Boolean,
  },
  media:[
      {
        post_id: [{type: Schema.Types.ObjectId, ref: "Post"}],
      },
    ],
  create_at: Date,
  update_at: Date
});

module.exports = mongoose.model("User", User);