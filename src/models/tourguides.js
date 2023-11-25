const { model, Schema } = require("mongoose");

const TourGuidesSchema = new Schema({
  "_id": {
    type: String,
  },
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
    type: Number,
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
