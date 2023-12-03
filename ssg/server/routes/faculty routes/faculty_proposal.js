const router = require('express').Router();
const Invoice = require('../../models/Invoice');

const { Faculty_ApprovedCountMiddleware, Faculty_RejectedCountMiddleware } = require('../../accessCounter');

router.post('/faculty-proposal', async(req, res) => {
    console.log(req.body.email);
    const proposal = await Invoice.find({"FacultyName.value"   : req.body.email, Status: {$eq: "Proposed"}});
    console.log(proposal);
    res.send({proposal: proposal});
});

router.post('/faculty-calltime',Faculty_ApprovedCountMiddleware, async(req, res) => {
    console.log(req.body.time);
    console.log(req.body.id);
    // console.log(Date(req.body.time))
    // const timeString = req.body.time;                                         // Replace with the time provided by the user
    // const todayDateString = new Date().toLocaleDateString();               // Get the current date as a string
    // const combinedDateTimeString = `${todayDateString} ${timeString}`;     // Combine date and time
    // console.log(combinedDateTimeString);
    await Invoice.updateOne({_id: req.body.id}, {$set: {CallTime: req.body.time, Status: "Approved"}});
    return res.status(200).send({message: "Recieved Sucessfully"});
});

router.post('/faculty-rejecteddescription',Faculty_RejectedCountMiddleware, async(req,res) => {
    console.log(req.body.id, req.body.description);
    await Invoice.updateOne({_id: req.body.id}, {$set: {StatusDescription: req.body.description, Status: "Rejected"}})
    return res.status(200).send({message: "Recieved Sucessfully"});
})

// router.post('/proposal-Modal', async(req, res) => {
//     console.log(req.body.email);
//     const proposal = await Invoice.find({CreatedBy : "test@something.gmail.com", Status: {$eq: "Proposed"}});
//     console.log(proposal);
//     res.send({proposal: proposal});
// });

module.exports = router;