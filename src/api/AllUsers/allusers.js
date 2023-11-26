const Users = require("../../models/users");

const allUsers = async (req, res) => {
  const userInfo = req.body;
  const doc = {
    user_name: userInfo.user_name,
    user_email: userInfo.user_email,
    user_image: userInfo.user_image,
    role: userInfo.role,
  };

  const userExisting = await Users.find({ user_email: userInfo.user_email });

  if (userExisting.length > 0) {
    return res.send({ message: "user already exist" });
  } else {
    const result = await Users.create(doc);
    res.send(result);
  }
};

module.exports = allUsers;
