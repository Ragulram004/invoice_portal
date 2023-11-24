const router = require('express').Router();
const Invoice = require('../models/Invoice');

router.post('/faculty-reject', async(req, res) => {
    console.log(req.body);
    await Invoice.updateOne({_id: req.body.id}, {$set: {Status: "Rejected", RejectedReason: req.body.Reason}});
    return res.status(200).send({message: "Recieved Sucessfully"});
});

// router.post('/withdrawn', async(req, res) => {
//     console.log(req.body.email);
//     const withdrawn = await Invoice.find({CreatedBy : "test@something.gmail.com", Status: {$eq: "Withdrawn"}}, {Title : 1});
//     console.log(withdrawn);
//     res.send({withdrawn: withdrawn});
// });

// router.post('/withdrawn-Modal', async(req, res) => {
//     console.log(req.body.email);
//     const withdrawn = await Invoice.find({CreatedBy : "test@something.gmail.com", Status: {$eq: "Withdrawn"}});
//     console.log(withdrawn);
//     res.send({withdrawn: withdrawn});
// });

module.exports = router;