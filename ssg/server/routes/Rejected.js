const router = require('express').Router();
const Invoice = require('../models/Invoice');

// router.post('/Rejecte', async(req, res) => {
//     console.log(req.body);
//     await Invoice.updateOne({_id: req.body.id}, {$set: {Status: "Rejected"}});
//     return res.status(200).send({message: "Recieved Sucessfully"});
// });

router.post('/Rejected', async(req, res) => {
    console.log(req.body.email);
    const Rejected = await Invoice.find({CreatedBy : req.body.email, Status: {$eq: "Rejected"}}, {Title : 1});
    console.log(Rejected);
    res.send({Rejected: Rejected});
});

router.post('/Rejected-Modal', async(req, res) => {
    console.log(req.body.email);
    const Rejected = await Invoice.find({CreatedBy : "test@something.gmail.com", Status: {$eq: "Rejected"}});
    console.log(Rejected);
    res.send({Rejected: Rejected});
});

module.exports = router;