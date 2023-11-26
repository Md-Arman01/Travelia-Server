const Users = require("../../models/users")


const  UserRole =  async(req, res)=>{
    
    const email = req.params.email
    const result = await Users.find({ user_email : email })

    res.send(result)
}

module.exports = UserRole