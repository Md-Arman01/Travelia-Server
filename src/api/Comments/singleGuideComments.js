const Comments = require("../../models/comment")


const singelGuideAllComments =  async(req, res)=>{
    const email = req.params.email
    
    const result = await Comments.find({ tour_guide_email: email })

    res.send(result)
}

module.exports = singelGuideAllComments