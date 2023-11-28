const SpecificPayment = require('../../api/SpeceficPayment')


const router = require('express').Router()


router.get('/payment/:package',  SpecificPayment)

module.exports = router