const allTourGuides = require('../../api/tourGuides/controller/alltourguides')


const router = require('express').Router()

router.get('/tourGuides', allTourGuides)

module.exports = router