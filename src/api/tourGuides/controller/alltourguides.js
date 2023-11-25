const TourGuides = require("../../../models/tourguides")

const allTourGuides = async(req, res)=>{
    const result = await TourGuides.find()
    res.send(result)
}

module.exports = allTourGuides