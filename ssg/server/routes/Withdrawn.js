const router = require('express').Router();
const Invoice = require('../models/Invoice');

const { WithdrawnCountMiddleware } = require('../accessCounter');

router.post('/withdraw',WithdrawnCountMiddleware, async(req, res) => {
    console.log(req.body);
    await Invoice.updateOne({_id: req.body.id}, {$set: {StatusDescription: req.body.Description, Status: "Withdrawn"}});
    return res.status(200).send({message: "Recieved Sucessfully"});
});

router.post('/withdrawn', async(req, res) => {
    console.log(req.body.email);
    const withdrawn = await Invoice.find({CreatedBy : req.body.email, Status: {$eq: "Withdrawn"}}, {Title : 1});
    console.log(withdrawn);
    res.send({withdrawn: withdrawn});
});

router.post('/withdrawn-Modal', async(req, res) => {
    console.log(req.body.email);
    const withdrawn = await Invoice.find({CreatedBy : "test@something.gmail.com", Status: {$eq: "Withdrawn"}});
    console.log(withdrawn);
    res.send({withdrawn: withdrawn});
});

module.exports = router;