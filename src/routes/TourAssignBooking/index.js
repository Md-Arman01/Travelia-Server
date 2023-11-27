const TourAssignBookings = require('../../api/TourAssignBookings')

const router = require('express').Router()


router.get('/bookings2/:name',  TourAssignBookings)

module.exports = router