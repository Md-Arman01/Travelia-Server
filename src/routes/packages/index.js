const findall = require('../../api/packages/controller/allpackages')


const router = require('express').Router()

router.get('/packages', findall)

module.exports = router