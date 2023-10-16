const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
    FacultyEmail: String,
});

const FacultyModel = mongoose.model('Faculties', FacultySchema);
module.exports = FacultyModel;