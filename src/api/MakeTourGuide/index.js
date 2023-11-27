const TourGuides = require("../../models/tourguides");

const MakeTourGuide = async (req, res) => {
  const tourGuidInfo = req.body;
  console.log(tourGuidInfo)

  const doc = {
    image: tourGuidInfo.image,
    phone_number: tourGuidInfo.phone_number,
    education: tourGuidInfo.education,
    skills: tourGuidInfo.skills,
    works_experience: tourGuidInfo.works_experience,
    provider_email: tourGuidInfo.provider_email,
    provider_name: tourGuidInfo.provider_name,
  };
  const result = await TourGuides.create(doc);
  res.send(result);
};

module.exports = MakeTourGuide;
