const router = require('express').Router();
const Invoice = require('../models/Invoice');

const { getValue } = require('../accessCounter');

router.post('/modal', async(req, res) => {
    console.log(req.body.id);
    const modaldata = await Invoice.findOne({_id : req.body.id});
    console.log(modaldata);
    res.status(200).send({modaldata: modaldata});
});


router.post('/counter', async(req, res) => {
    console.log(getValue());
});

module.exports = router;