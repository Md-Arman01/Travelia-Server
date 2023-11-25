const TourGuides = require("../../../models/tourguides")


const singleTourGuides = async(req, res)=>{
    const id = req.params.id
    const result = await TourGuides.find({ _id: id })
    res.send(result)
}

module.exports = singleTourGuides