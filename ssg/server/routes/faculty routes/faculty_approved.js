const router = require('express').Router();
const Invoice = require('../../models/Invoice');

const { Faculty_CompletedCountMiddleware } = require('../../accessCounter');

router.post('/faculty-approved', async(req, res) => {
    console.log(req.body.email);
    const approved = await Invoice.find({"FacultyName.value" : req.body.email, Status: {$eq: "Approved"}});
    console.log(approved);
    res.send({approved: approved});
});

router.post('/faculty-worklog',Faculty_CompletedCountMiddleware, async(req, res) => {
    if (req.body.systemnumber == "") {
        var systemnumer = "Not applicable";
    } else {
        var systemnumer = req.body.systemnumber;
    }
    console.log(req.body.email);
    console.log(req.body.worklog);
    console.log(req.body.modalid);
    console.log(req.body.systemnumber);
    await Invoice.updateOne({_id: req.body.modalid}, {$set: {Status: "Completed", Worklog: req.body.worklog, SystemNumber: systemnumer}});
    return res.status(200).send({message: "Worklog Updates and Status Chnaged"})
})

module.exports = router;