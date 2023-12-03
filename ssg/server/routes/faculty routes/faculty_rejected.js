const router = require('express').Router();
const Invoice = require('../../models/Invoice');


router.post('/faculty-rejected', async(req, res) => {
    console.log(req.body.email);
    const rejected = await Invoice.find({"FacultyName.value" : req.body.email, Status: {$eq: "Rejected"}});
    console.log(rejected);
    res.send({rejected: rejected});
});

module.exports = router;