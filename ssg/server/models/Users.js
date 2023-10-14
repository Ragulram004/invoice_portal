const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    name: String,
    rollnumber: String
});

const UserModel = mongoose.model('Users', UserSchema);
module.exports = UserModel;