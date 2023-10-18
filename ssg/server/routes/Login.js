//login and user verfication in each page
const router = require('express').Router();
const Users = require('../models/Users');
const jwt = require('jsonwebtoken');


router.post('/getUsers', async (req, res) => {
    const user = await Users.findOne({email : req.body.email});
    const email = req.body.email;
    const accesstoken = await jwt.sign(email, process.env.ACCESS_TOKEN_SECRET);
    if (user) 
    {
        console.log('Login successful');
        return res.status(200).send({accesstoken: accesstoken});
    }
    else
    {
        console.log("User not found in DB");
        return res.status(404).send({message: "User not found in DB"});
    }
});

router.post("/verifyToken", async (req, res) => {
    try {
        console.log("Token verifying");
        const token = req.body.token;
        if (token) {
            const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            if (decoded){
                const userinfo = await Users.findOne({email : decoded});
                const name = (userinfo.name);
                const email = (userinfo.email);
                const rollnumber = (userinfo.rollnumber)
                console.log(name);
                console.log(email);
                console.log(rollnumber);
            console.log("Token verified");
            return res.status(200).send({name: name, email: email, rollnumber: rollnumber});
            }
            else {return res.status(403).send({message: "Token decode failed"})}}
        else {
            console.log("Token Not provided -> Unauthroised User");
        }
    } catch (err) {
        console.error("Error decoding token: ", err);
        return res.status(403).send({message: "Token not verified"});
    }
});

module.exports = router