const UserRole = require('../../api/UserRole')

const router = require('express').Router()


router.get('/users/:email', UserRole )

module.exports = router