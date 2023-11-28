const Storys = require("../../models/story")

const SingleStory =  async(req, res)=>{
    
    const id = req.params.id
    const result = await Storys.find({ _id: id })

    res.send(result)
}

module.exports = SingleStory