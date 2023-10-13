const mongoose = require('mongoose');

const NewInvoiceSchema = new mongoose.Schema({
    StudentName: String,
    TacId : String,
    Title : String,
    Description : String,
    FacultyName : String,
    Time : String
});

const NewInvoiceModel = mongoose.model('NewInvoice', NewInvoiceSchema);
module.exports = NewInvoiceModel;