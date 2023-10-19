const router = require('express').Router();
const Invoice = require('../models/Invoice');

router.put('/update', async(req, res) => {
    const dataArray = req.body.dataArray;
});

module.exports = router;