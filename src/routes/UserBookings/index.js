const UserBookings = require('../../api/UserBookings')

const router = require('express').Router()


router.get('/bookings/:email', UserBookings )

module.exports = router