const router = require('express').Router();
const Systems = require('../../models/System');

router.post('/faculty-system-number', async(req, res) => {
    console.log("***********")
    console.log(req.body.systemnumber);
    const searchTerm = req.body.systemnumber;

    try {
        const results = await Systems.find({
        systemnumber: { $regex: searchTerm, $options: 'i' }
        }).limit(5);
        console.log(results);
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    });

module.exports = router;