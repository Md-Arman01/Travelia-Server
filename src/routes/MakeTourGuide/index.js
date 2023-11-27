const MakeTourGuide = require('../../api/MakeTourGuide')

const router = require('express').Router()


router.post('/tourGuides', MakeTourGuide)

module.exports = router