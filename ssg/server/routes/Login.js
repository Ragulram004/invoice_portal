//login and user verfication in each page
const router = require('express').Router();
const Users = require('../models/Users');
const jwt = require('jsonwebtoken');

const { LoginCountMiddleware } = require('../accessCounter');
// app.use(countAccessMiddleware);
// let accessCount = 0;

// const countAccessMiddleware = (req, res, next) => {
//   accessCount++;
//   console.log("Access Count: ", accessCount);
//   next();
// };

router.post('/getUsers',LoginCountMiddleware, async (req, res) => {
  // console.log("Access Count: ", accessCount);
    const user = await Users.findOne({email : req.body.email});
    console.log(user)
    // console.log(user.role);
    // const role = user.role;
    const email = req.body.email;
    const accesstoken = await jwt.sign({email: email}, process.env.ACCESS_TOKEN_SECRET);
    if (user) 
    {
        return res.status(200).send({accesstoken: accesstoken, role: user.role});
    }
    else
    {
        console.log("User not found in DB");
        return res.status(404).send({message: "User not found in DB"});
    }
});

router.post("/verifyToken", async (req, res) => {
    try {
        const token = req.body.token;
        if (token) {
            const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            if (decoded){
                const userinfo = await Users.findOne({email : decoded.email});
                const name = (userinfo.name);
                const email = (userinfo.email);
                const rollnumber = (userinfo.rollnumber);
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


// Import necessary libraries and models

// ... (previous code)

router.get('/user-search', async (req, res) => {
    console.log("***********")
    console.log(req.query.q);
    const searchTerm = req.query.q;

    try {
      const results = await Users.find({
        $and: [ {role: "student"},{
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { email: { $regex: searchTerm, $options: 'i' } },
          { rollnumber: { $regex: searchTerm, $options: 'i' } },
        ]}]
      }).limit(5);
      console.log(results);
      res.json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


router.get('/faculty-search', async (req, res) => {
    console.log("***********")
    console.log(req.query.q);
    const searchTerm = req.query.q;

    try {
      const results = await Users.find({
        $and: [ {role: "faculty"},{
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { email: { $regex: searchTerm, $options: 'i' } },
          { rollnumber: { $regex: searchTerm, $options: 'i' } },
        ]}]
      }).limit(5);
      console.log(results);
      res.json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

module.exports = router;