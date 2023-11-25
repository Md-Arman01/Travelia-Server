const { model, Schema } = require("mongoose");

const WishlistSchema = new Schema({
  "user_name": {
    type: String,
  },
  "user_email": {
    type: String,
  },
  "image": {
    type: String,
  },
  "tour_type": {
    type: String,
  },
  "trip_title": {
    type: String,
  },
  "price": {
    type: Number,
  },
});

const Wishlist = model("wishlist", WishlistSchema);

module.exports = Wishlist;