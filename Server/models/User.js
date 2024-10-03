const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: false },
  mobile: { type: String, required: false },
  comment: { type: String, required: false },
  profileImage: {
    data: Buffer,
    contentType: String
  }
});


module.exports = mongoose.model('User', userSchema);
