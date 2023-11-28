const UserWishlist = require('../../api/UserWishList')
const verifyToken = require('../../middleware/verifyToken')

const router = require('express').Router()


router.get('/wishlist/:email', verifyToken, UserWishlist)

module.exports = router