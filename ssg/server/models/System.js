const mongoose = require('mongoose');

const SystemsSchema = new mongoose.Schema({
    systemnumber: String
});

const SystemsModel = mongoose.model('Systems', SystemsSchema);
module.exports = SystemsModel;