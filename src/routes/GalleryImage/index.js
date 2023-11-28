const GalleryImage = require('../../api/Gallery')

const router = require('express').Router()

router.get('/gallery', GalleryImage)

module.exports = router