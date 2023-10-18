const router = require('express').Router();
const Invoice = require('../models/Invoice');

router.post('/proposal', async(req, res) => {
    console.log("**********************");
    console.log(req.body.email);
    const proposal = await Invoice.find({CreatedBy : "test@something.gmail.com"});
    console.log(proposal);
    res.send({proposal: proposal});
});

module.exports = router;