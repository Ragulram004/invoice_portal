const router = require('express').Router();

const Invoice = require('../models/Invoice');

router.get('/Faculty', async (req, res) => {
    // const faculty = await Faculty.find({FacultyEmail: "faculty@bitsathy.ac.in"});
    // res.send(faculty);
    // const user = await Users.find({email: "test1.al22@bitsathy.ac.in"});
    // res.send(user);
    const invoice = await Invoice.find({StudentName: "Saran S M"});
    res.send(invoice);
});

module.exports = router;