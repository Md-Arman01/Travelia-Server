const { model, Schema } = require("mongoose");

const UsersSchema = new Schema({
  "user_name": {
    type: String,
  },
  "user_email": {
    type: String,
  },
  "user_image": {
    type: String,
  },
  "role": {
    type: String,
  },
  "phone_number": {
    type: String,
  },
  "education": {
    type: String,
  },
  "skills": {
    type: String,
  },
  "work_experience": {
    type: String,
  },
  
});

const Users = model("users", UsersSchema);

module.exports = Users;
