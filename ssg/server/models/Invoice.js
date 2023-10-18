const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    CreatedBy: String,
    StudentName: String,
    TacId : String,
    Title : String,
    Description : String,
    FacultyName : String,
    Time : String,
    Status : String,
    Date: String
});

const InvoiceModel = mongoose.model('Invoice', InvoiceSchema);
module.exports = InvoiceModel;