const { model, Schema } = require("mongoose");

const WishlistSchema = new Schema({
  _id: {
    type: String,
  },
  image: {
    type: String,
    // required: true
  },
  tour_type: {
    type: String,
  },
  trip_title: {
    type: String,
  },
  about: {
    type: String,
  },
  day_1: {
    type: String,
  },
  day_2: {
    type: String,
  },
  day_3: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Wishlist = model("wishlist", WishlistSchema);

module.exports = Wishlist;