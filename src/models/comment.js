const { model, Schema } = require("mongoose");

const CommentsSchema = new Schema({
  "user_email": {
    type: String,
  },
  "user_image": {
    type: String,
  },
  "tour_guide_email": {
    type: String,
  },
  "comment": {
    type: String,
  },
  "rating": {
    type: Number,
  },

});

const Comments = model("comments", CommentsSchema);

module.exports = Comments;