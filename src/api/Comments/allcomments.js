const Comments = require("../../models/comment")

const allComments =  async(req, res)=>{
    const commentInfo = req.body
    const doc = {
        user_email: commentInfo.user_email,
        user_image: commentInfo.user_image,
        tour_guide_email: commentInfo.tour_guide_email,
        comment: commentInfo.comment,
        rating: commentInfo.rating,
    }
    const result = await Comments.create(doc)
    res.send(result)
}

module.exports = allComments