const UserWishlist = require('../../api/UserWishList')

const router = require('express').Router()


router.get('/wishlist/:email', UserWishlist)

module.exports = router