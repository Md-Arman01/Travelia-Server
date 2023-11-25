const Packages = require("../../../models/packages")

const singlepackage = async(req, res)=>{
    const id = req.params.id
    const result = await Packages.find({ _id: id })
    res.send(result)
}

module.exports = singlepackage