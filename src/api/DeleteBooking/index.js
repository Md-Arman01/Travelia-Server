const Bookings = require("../../models/bookings");

const DeleteBooking = async (req, res) => {
    const id = req.params.id;
  
    const result = await Bookings.findByIdAndDelete({ _id: id });
  
    res.send(result);
  };
  
  module.exports = DeleteBooking;