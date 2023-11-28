const TourType = require('../../api/TourType')

const router = require('express').Router()

router.get('/packages2/:type', TourType)

module.exports = router