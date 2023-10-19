const router = require('express').Router();
const Invoice = require('../models/Invoice');

router.post('/proposal', async(req, res) => {
    console.log(req.body.email);
    const proposal = await Invoice.find({CreatedBy : "test@something.gmail.com", Status: {$eq: "Proposed"}}, {Title : 1});
    console.log(proposal);
    res.send({proposal: proposal});
});

router.post('/proposal-Modal', async(req, res) => {
    console.log(req.body.email);
    const proposal = await Invoice.find({CreatedBy : "test@something.gmail.com", Status: {$eq: "Proposed"}});
    console.log(proposal);
    res.send({proposal: proposal});
});

module.exports = router;