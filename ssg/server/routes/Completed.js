const router = require('express').Router();
const Invoice = require('../models/Invoice');

router.post('/complete', async(req, res) => {
    console.log(req.body);
    await Invoice.updateOne({_id: req.body.id}, {$set: {Status: "Withdrawn"}});
    return res.status(200).send({message: "Recieved Sucessfully"});
});

router.post('/completed', async(req, res) => {
    console.log(req.body.email);
    const completed = await Invoice.find({CreatedBy : "test@something.gmail.com", Status: {$eq: "Completed"}}, {Title : 1});
    console.log(completed);
    res.send({completed: completed});
});

router.post('/completed-Modal', async(req, res) => {
    console.log(req.body.email);
    const completed = await Invoice.find({CreatedBy : "test@something.gmail.com", Status: {$eq: "Completed"}});
    console.log(completed);
    res.send({completed: completed});
});

module.exports = router;