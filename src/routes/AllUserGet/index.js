const AllUsersGet = require('../../api/AllUsersGet')
const verifyToken = require('../../middleware/verifyToken')


const router = require('express').Router()

router.get('/users', verifyToken, AllUsersGet)

module.exports = router