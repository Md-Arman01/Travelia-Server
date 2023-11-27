const SingleUser = require('../../api/SingleUser')

const router = require('express').Router()


router.get('/users2/:id',  SingleUser)

module.exports = router