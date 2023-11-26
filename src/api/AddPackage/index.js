const Packages = require("../../models/packages");

const AddPackage =  async(req, res)=>{
    const packageInfo = req.body;

    const doc = {
        image: packageInfo.image,
        tour_type: packageInfo.tour_type,
        trip_title: packageInfo.trip_title,
        about: packageInfo.about,
        day_1: packageInfo.day_1,
        day_2: packageInfo.day_2,
        day_3: packageInfo.day_3,
        price: packageInfo.price,
    }
    const result = await Packages.create(doc)
    res.send(result)
}

module.exports = AddPackage