const router = require('express').Router();
const Invoice = require('../../models/Invoice');

router.post('/faculty-completed', async(req, res) => {
    console.log(req.body.email);
    const completed = await Invoice.find({FacultyName : "faculty@bitsathy.ac.in", Status: {$eq: "Completed"}});
    console.log(completed);
    res.send({completed: completed});
});

module.exports = router;