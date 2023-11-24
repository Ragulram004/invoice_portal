const router = require('express').Router();
const Invoice = require('../../models/Invoice');

router.post('/faculty-rejected', async(req, res) => {
    console.log(req.body.email);
    const rejected = await Invoice.find({FacultyName : "faculty@bitsathy.ac.in", Status: {$eq: "Rejected"}});
    console.log(rejected);
    res.send({rejected: rejected});
});

module.exports = router;