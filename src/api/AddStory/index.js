const Storys = require("../../models/story");

const AddStory =  async(req, res)=>{
    const storyInfo = req.body;

    const doc = {
        provider_image: storyInfo.provider_image,
        provider_name: storyInfo.provider_name,
        provider_email: storyInfo.provider_email,
        tour_place: storyInfo.tour_place,
        tour_experience: storyInfo.tour_experience,
        story_image: storyInfo.story_image,
    }
    const result = await Storys.create(doc)
    res.send(result)
}

module.exports = AddStory