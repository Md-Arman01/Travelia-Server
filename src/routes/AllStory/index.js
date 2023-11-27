const AllStory = require('../../api/AllStory')

const router = require('express').Router()

router.get('/storys', AllStory)

module.exports = router