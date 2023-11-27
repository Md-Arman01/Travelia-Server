const DeleteBooking = require('../../api/DeleteBooking')

const router = require('express').Router()

router.delete('/bookings/:id', DeleteBooking)

module.exports = router