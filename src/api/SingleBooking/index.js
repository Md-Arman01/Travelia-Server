const Bookings = require("../../models/bookings")


const SingleBooking =  async(req, res)=>{
    
    const id = req.params.id
    const result = await Bookings.find({ _id: id })

    res.send(result)
}

module.exports = SingleBooking