const Packages = require("../../models/packages")


const TourType = async(req, res)=>{
    const type = req.params.type
    const result = await Packages.find({ tour_type : type })
    res.send(result)
}

module.exports = TourType