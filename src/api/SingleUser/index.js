const Users = require("../../models/users")


const SingleUser =  async(req, res)=>{
    
    const id = req.params.id
    const result = await Users.find({ _id: id })

    res.send(result)
}

module.exports = SingleUser