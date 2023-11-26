const singelGuideAllComments = require('../../api/Comments/singleGuideComments')

const router = require('express').Router()


router.get('/comments/:email', singelGuideAllComments)

module.exports = router