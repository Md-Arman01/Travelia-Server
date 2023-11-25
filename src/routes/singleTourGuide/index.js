const singleTourGuides = require('../../api/tourGuides/controller/singleTourGuide')

const router = require('express').Router()


router.get('/tourGuides/:id', singleTourGuides )

module.exports = router