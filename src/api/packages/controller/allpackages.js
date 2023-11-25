const Packages = require("../../../models/packages")


const findall =  async(req, res)=>{
    const result = await Packages.find()
    res.send(result)
}

module.exports = findall

