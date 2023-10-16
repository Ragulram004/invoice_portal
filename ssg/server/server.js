const express = require('express');
const mogoose = require('mongoose');
const Users = require('./models/Users');
const Invoice = require('./models/Invoice');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();


// app.use(cors);
const app = express();
const port = 3002;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// {app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT'],
//     credentials: false,
// }));}

mogoose.connect('mongodb://127.0.0.1:27017/invoice');

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });



app.get('/checkToken', authenticateToken, (req, res) => {
    res.send({valid: true});
});

// app.get('/getUsers', authenticateToken, (req, res) => {
//     res.send(req.username);
// });

app.post("/adduser", async (req, res) => {
    try {
    const newUser = new Users({email: req.body.email},{name: req.body.name},{rollnumber: req.body.rollnumber});
    await newUser.save();
    res.send(newUser);
    } catch (error) {
        // console.log(error)
        console.log("User already exists")
    }
});

app.post('/getUsers', async (req, res) => {
    // const newUser = new Users({email: req.body.email});
    // await newUser.save();

    const user = await Users.findOne({email: req.body.email});
    const username = { name: user};
    const accesstoken = jwt.sign(username, process.env.ACCESS_TOKEN_SECRET)
    // console.log(newUser);
    if (user) 
    {
        return res.status(200).send({accesstoken: accesstoken});
    }
    else
    {
        console.log("User not found in DB");
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

// app.get('/user', async (req, res) => {
//     const user = await User.findOne({email: req.body.email});
//     if (user) return res.status(409).send({message: "User already registered."});
// }) 


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// console.log("----------------------")
// console.log(Users.findOne({email: "saran.al22@bitsathy.ac.in"}));
// console.log("----------------------")
// if(Users.findOne({email:"saran.al22@bitsathy.ac.in"})){
//     getData = async() => {
//     try {
//     const us = await Users.findOne({email:"saran.al22@bitsathy.ac.in"})
//     console.log(us._id)
//     } catch (error) {
//         console.log(error)
//     }
// }
//     getData();
//     console.log("sucess")
// }
// else{
//     console.log("********************")
// }