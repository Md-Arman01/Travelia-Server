const AllUsersGet = require('../../api/AllUsersGet')


const router = require('express').Router()

router.get('/users', AllUsersGet)

module.exports = router