const { model, Schema } = require("mongoose");

const GallerySchema = new Schema({
  src: {
    type: String,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
});

const Gallery = model("gallery", GallerySchema);

module.exports = Gallery;
