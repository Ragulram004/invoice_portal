const router = require('express').Router();
const Invoice = require('../models/Invoice');

router.post("/newInvoice", async(req, res) => {
    console.log("**********************");
    console.log(req.body);
    console.log("------------------------");
    const dataArray = req.body.dataArray;
    const dataArrayString = JSON.stringify(dataArray);
    await Invoice.insertMany([{
        CreatedBy: "test@something.gmail.com",
        StudentName: dataArrayString,
        TacId : req.body.projectTac,
        Title : req.body.projectName,
        Description : req.body.projectDescription,
        FacultyName : req.body.facultyName,
        Time : req.body.preferredTime,
        Status : req.body.status,
        Date: req.body.selectedDate
    }])
    return res.status(200).send({message: "Recieved Sucessfully"});
})

module.exports = router;