const Users = require("../../models/users")


const AllUsersGet =  async(req, res)=>{
    const result = await Users.find()
    res.send(result)
}

module.exports = AllUsersGet