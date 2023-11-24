const router = require('express').Router();
const Invoice = require('../../models/Invoice');

router.post('/faculty-approved', async(req, res) => {
    console.log(req.body.email);
    const approved = await Invoice.find({FacultyName : "faculty@bitsathy.ac.in", Status: {$eq: "Approved"}});
    console.log(approved);
    res.send({approved: approved});
});

module.exports = router;