const SingleBooking = require('../../api/SingleBooking')

const router = require('express').Router()


router.get('/bookings3/:id', SingleBooking)

module.exports = router