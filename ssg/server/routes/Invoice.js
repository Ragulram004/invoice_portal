const router = require('express').Router();
const { ProposedCountMiddleware } = require('../accessCounter');
const Invoice = require('../models/Invoice');

router.post("/newInvoice",ProposedCountMiddleware, async(req, res) => {
    console.log("**********************");
    console.log(req.body);
    console.log("------------------------");
    const dataArray = req.body.activeDetail;
    console.log(req.body.TotalStudents);
    console.log(req.body.StudentsName);
    console.log(req.body.StudentsEmail);
    console.log(dataArray)
    if (req.body.projectTac === ''){
        var projectTac = 'No TAC'
    }else {
        var projectTac = res.body.projectTac
    }
    // const dataArrayString = JSON.stringify(dataArray);
    // console.log(dataArray[1].value);
    await Invoice.insertMany([{
        CreatedBy: dataArray[1].value,
        TotalStudents: req.body.TotalStudents,
        StudentsName: req.body.StudentsName,
        StudentsEmail: req.body.StudentsEmail,
        StudentData: dataArray,
        TacId : projectTac,
        Title : req.body.projectName,
        Description : req.body.projectDescription,
        FacultyName : req.body.facultyName,
        Time : req.body.preferredTime,
        Status : req.body.status,
        Date: req.body.selectedDate
    }])
    return res.status(200).send({message: "Recieved Sucessfully"});
})

router.post('/test-invoice',async(req,res) => {
    const data = "saran.al22@bitsathy.ac.in"
    const response = await Invoice.findOne({TotalStudents : 2});
    console.log(response);
})

module.exports = router;