const allUsers = require('../../api/AllUsers/allusers')

const router = require('express').Router()

router.post('/users',  allUsers)

module.exports = router