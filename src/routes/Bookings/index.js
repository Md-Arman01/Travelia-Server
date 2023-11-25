const allBookings = require('../../api/Bookings/allbookings')

const router = require('express').Router()

router.post('/bookings', allBookings)

module.exports = router