const DeleteWishlist = require('../../api/DeleteWishlist')

const router = require('express').Router()

router.delete('/wishlist/:id', DeleteWishlist)

module.exports = router