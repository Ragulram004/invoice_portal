const router = require('express').Router();
const Invoice = require('../models/Invoice');

router.post("/newInvoice", async(req, res) => {
    console.log("**********************");
    console.log(req.body);
    console.log("------------------------");
    await Invoice.insertMany([{
        CreatedBy: "test@something.gmail.com",
        StudentName: req.body.activeDetail,
        TacId : req.body.projectTac,
        Title : req.body.projectName,
        Description : req.body.projectDescription,
        FacultyName : req.body.facultyName,
        Time : req.body.preferredTime,
        Status : req.body.status
    }])
    return res.status(200).send({message: "Recieved Sucessfully"});
})

module.exports = router;