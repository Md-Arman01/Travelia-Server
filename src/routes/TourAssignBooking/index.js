const TourAssignBookings = require('../../api/TourAssignBookings')
const verifyToken = require('../../middleware/verifyToken')

const router = require('express').Router()


router.get('/bookings2/:name', verifyToken,  TourAssignBookings)

module.exports = router