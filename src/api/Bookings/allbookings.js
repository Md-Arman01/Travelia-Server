const Bookings = require("../../models/bookings");


const allBookings =  async(req, res)=>{
    const bookingInfo = req.body;

    const doc = {
        user_name: bookingInfo.user_name,
        user_email: bookingInfo.user_email,
        select_tour_guide: bookingInfo.select_tour_guide,
        date: bookingInfo.date,
        price: bookingInfo.price,
        user_image: bookingInfo.user_image,
        tour_type: bookingInfo.tour_type,
        trip_title: bookingInfo.trip_title,
    }
    const result = await Bookings.create(doc)
    res.send(result)
}

module.exports = allBookings