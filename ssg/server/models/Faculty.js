const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
    email: String,
});

const FacultyModel = mongoose.model('Faculties', FacultySchema);
module.exports = FacultyModel;