const Wishlist = require("../../models/wishlist");

const DeleteWishlist = async (req, res) => {
  const id = req.params.id;

  const result = await Wishlist.findByIdAndDelete({ _id: id });

  res.send(result);
};

module.exports = DeleteWishlist;
