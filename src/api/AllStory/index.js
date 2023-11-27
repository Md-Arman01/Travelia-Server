const Storys = require("../../models/story")

const AllStory =  async(req, res)=>{
    const result = await Storys.find()
    res.send(result)
}

module.exports = AllStory