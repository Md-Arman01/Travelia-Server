const allComments = require('../../api/Comments/allcomments')

const router = require('express').Router()

router.post('/comments', allComments)

module.exports = router