const AddStory = require('../../api/AddStory')

const router = require('express').Router()

router.post('/storys', AddStory)

module.exports = router