const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  discussQue: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DiscussQue",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("DiscussLike", likeSchema);
