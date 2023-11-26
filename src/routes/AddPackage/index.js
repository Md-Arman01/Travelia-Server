const AddPackage = require('../../api/AddPackage')

const router = require('express').Router()

router.post('/packages', AddPackage )

module.exports = router