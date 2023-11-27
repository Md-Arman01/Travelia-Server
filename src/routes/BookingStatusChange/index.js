const UpdateBookingStatus = require('../../api/BookingStatus')

const router = require('express').Router()


router.put('/bookings/:id',  UpdateBookingStatus)

module.exports = router