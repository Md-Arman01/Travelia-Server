const singlepackage = require('../../api/packages/controller/singlepackage')

const router = require('express').Router()


router.get('/packages/:id', singlepackage)

module.exports = router