const allWishlist = require('../../api/wishlist/controller/allwishlist')


const router = require('express').Router()


router.post('/wishlist', allWishlist)

module.exports = router