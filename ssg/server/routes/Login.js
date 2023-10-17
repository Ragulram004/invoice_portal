const router = require('express').Router();
const Users = require('../models/Users');
const jwt = require('jsonwebtoken');


router.post('/getUsers', async (req, res) => {
    // const newUser = new Users({email: req.body.email});
    // await newUser.save();
    console.log("Recieving data....");
    console.log(req.body.email);
    console.log("***********************************");
    const user = await Users.findOne({email : req.body.email});
    const email = req.body.email;
    console.log(user);
    console.log(req.body.email);
    const accesstoken = await jwt.sign(email, process.env.ACCESS_TOKEN_SECRET);
    console.log(accesstoken);
    console.log(email);
    if (user) 
    {
        // Cookies.set('token', response.data.accesstoken, { expires: 1/24 });
        console.log('Login successful');
        console.log('-----------------------');
        return res.status(200).send({accesstoken: accesstoken});
    }
    else
    {
        console.log("User not found in DB");
        return res.status(404).send({message: "User not found in DB"});
        // const newUser = new Users({email: req.body.email});
        // await newUser.save();
        // return res.status(201).send({message: "User registered successfully."});
    }
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, username) => {
        if (err) return res.sendStatus(403);
        req.username = username;
        next();
    })
}

module.exports = router