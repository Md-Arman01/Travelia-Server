const AddPayment = require('../../api/AddPayment')

const router = require('express').Router()

router.post('/payment', AddPayment)

module.exports = router