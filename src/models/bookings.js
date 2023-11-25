const { model, Schema } = require("mongoose");

const BookingsSchema = new Schema({
  "user_name": {
    type: String,
  },
  "user_email": {
    type: String,
  },
  "select_tour_guide": {
    type: String,
  },
  "date": {
    type: String,
  },
  "price": {
    type: Number,
  },
  "user_image": {
    type: String,
  },
  "tour_type": {
    type: String,
  },
  "trip_title": {
    type: String,
  },
});

const Bookings = model("bookings", BookingsSchema);

module.exports = Bookings;