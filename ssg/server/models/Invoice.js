const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    CreatedBy: String,
    TotalStudents: Number,
    StudentsName: [String],
    StudentsEmail: [String],
    AccetedStudents: [String],
    StudentData: mongoose.Schema.Types.Mixed,
    TacId : String,
    Title : String,
    Description : String,
    FacultyName : mongoose.Schema.Types.Mixed,
    Time : String,
    Status : String,
    Date: Date,
    CallTime: Date,
    StatusDescription: String,
    Worklog: String,
    SystemNumber: String
});

const InvoiceModel = mongoose.model('Invoice', InvoiceSchema);
module.exports = InvoiceModel;