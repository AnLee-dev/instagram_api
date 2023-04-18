const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/insta_data_dev");
    console.log("connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connect };
