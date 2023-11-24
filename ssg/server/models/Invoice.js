const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    CreatedBy: String,
    StudentName: mongoose.Schema.Types.Mixed,
    TacId : String,
    Title : String,
    Description : String,
    FacultyName : mongoose.Schema.Types.Mixed,
    Time : String,
    Status : String,
    Date: Date,
    CallTime: Date,
    StatusDescription: String
});

const InvoiceModel = mongoose.model('Invoice', InvoiceSchema);
module.exports = InvoiceModel;