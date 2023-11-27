const Wishlist = require("../../models/wishlist");

const UserWishlist = async (req, res) => {
  const email = req.params.email;

  const result = await Wishlist.find({ user_email: email });
  res.send(result);
};

module.exports = UserWishlist;
