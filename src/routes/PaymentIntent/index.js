const PaymentIntent = require('../../api/PaymentIntent')

const router = require('express').Router()

router.post('/create-payment-intent', PaymentIntent)

module.exports = router