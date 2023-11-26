const UpdateUserRole = require('../../api/UpdateUserRole')


const router = require('express').Router()


router.put('/users/:id', UpdateUserRole )

module.exports = router