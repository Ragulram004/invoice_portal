const router = require('express').Router();
const Invoice = require('../models/Invoice');

router.post('/modal', async(req, res) => {
    console.log(req.body.id);
    const modaldata = await Invoice.findOne({_id : req.body.id});
    console.log(modaldata);
    res.status(200).send({modaldata: modaldata});
});

module.exports = router;