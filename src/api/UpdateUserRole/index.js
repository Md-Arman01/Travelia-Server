const Users = require("../../models/users")

const UpdateUserRole = async(req, res)=>{
    const id = req.params.id
    const data = req.body
    const update ={
        role : data.role
    }
    const option = {
        new: true,
        runValidators: true,
      }

    const result = await Users.findByIdAndUpdate({ _id: id }, update, option)
    res.send(result)
    

}

module.exports = UpdateUserRole