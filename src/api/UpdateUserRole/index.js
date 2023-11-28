const Users = require("../../models/users")

const UpdateUserRole = async(req, res)=>{
    const id = req.params.id
    const data = req.body
    const update ={
        role : data.role,
        user_name: data.user_name,
        user_image: data.user_image,
        phone_number: data.phone_number,
        education: data.education,
        skills: data.skills,
        work_experience: data.work_experience,
    }
    const option = {
        new: true,
        runValidators: true,
      }

    const result = await Users.findByIdAndUpdate({ _id: id }, update, option)
    res.send(result)
    

}

module.exports = UpdateUserRole