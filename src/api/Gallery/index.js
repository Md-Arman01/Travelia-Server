const Gallery = require("../../models/gallery")


const GalleryImage =  async(req, res)=>{
    const result = await Gallery.find()
    res.send(result)
}

module.exports = GalleryImage