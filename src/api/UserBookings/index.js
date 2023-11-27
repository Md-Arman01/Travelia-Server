const Bookings = require("../../models/bookings")

const UserBookings =  async(req, res)=>{
    const email = req.params.email
    
    const result = await Bookings.find({ user_email : email })
    res.send(result)
}

module.exports = UserBookings