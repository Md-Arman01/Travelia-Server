const AuthenticationToken = require('../../api/Authentication')



const router = require('express').Router()

router.post('/jwt', AuthenticationToken)

module.exports = router