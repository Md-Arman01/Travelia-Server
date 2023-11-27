const Bookings = require("../../models/bookings")


const TourAssignBookings =  async(req, res)=>{
    
    const guideName = req.params.name
    const result = await Bookings.find({ select_tour_guide : guideName })

    res.send(result)
}

module.exports = TourAssignBookings