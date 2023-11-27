const Bookings = require("../../models/bookings")

const UpdateBookingStatus = async(req, res)=>{
    const id = req.params.id
    const changeStatus = req.body
    const update ={
        status : changeStatus.status
    }
    const option = {
        new: true,
        runValidators: true,
      }

    const result = await Bookings.findByIdAndUpdate({ _id: id }, update, option)
    res.send(result)
    

}

module.exports = UpdateBookingStatus