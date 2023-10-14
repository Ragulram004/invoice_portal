const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    StudentName: String,
    TacId : String,
    Title : String,
    Description : String,
    FacultyName : String,
    Time : String,
    Status : String
});

const InvoiceModel = mongoose.model('Invoice', InvoiceSchema);
module.exports = InvoiceModel;