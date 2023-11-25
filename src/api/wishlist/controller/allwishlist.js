const Wishlist = require("../../../models/wishlist");


const allWishlist =  async(req, res)=>{
    const wishlistInfo = req.body;
    console.log(wishlistInfo)

    const doc = {
        user_name: wishlistInfo.user_name,
        user_email: wishlistInfo.user_email,
        image: wishlistInfo.image,
        tour_type: wishlistInfo.tour_type,
        trip_title: wishlistInfo.trip_title,
        price: wishlistInfo.price
    }
    const result = await Wishlist.create(doc)
    res.send(result)
}

module.exports = allWishlist

