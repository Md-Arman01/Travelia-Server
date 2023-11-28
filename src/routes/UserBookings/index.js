const UserBookings = require('../../api/UserBookings')
const verifyToken = require('../../middleware/verifyToken')

const router = require('express').Router()


router.get('/bookings/:email', verifyToken, UserBookings )

module.exports = router