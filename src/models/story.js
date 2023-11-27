const { model, Schema } = require("mongoose");

const StorysSchema = new Schema({
  provider_image: {
    type: String,
  },
  provider_name: {
    type: String,
  },
  provider_email: {
    type: String,
  },
  tour_place: {
    type: String,
  },
  tour_experience: {
    type: String,
  },
  story_image: {
    type: String,
  },
});

const Storys = model("storys", StorysSchema);

module.exports = Storys;
