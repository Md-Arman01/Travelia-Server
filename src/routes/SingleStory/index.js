const SingleStory = require('../../api/SingleStory')

const router = require('express').Router()


router.get('/storys/:id', SingleStory)

module.exports = router