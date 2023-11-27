const { model, Schema } = require("mongoose");

const TourGuidesSchema = new Schema({
  "provider_name": {
    type: String,
  },
  "provider_email": {
    type: String,
  },
  "image": {
    type: String,
  },
  "phone_number": {
    type: String,
  },
  "education": {
    type: String,
  },
  "skills": {
    type: String,
  },
  "works_experience": {
    type: Number,
  },
});

const TourGuides = model("tour-guides", TourGuidesSchema);

module.exports = TourGuides;
