const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//Database
const Users = require('./models/Users');
const Invoice = require('./models/Invoice');

const dbConnect = require('./dbConnect')

const app = express();

// app.use(dbConnect)

dbConnect();

const port = process.env.PORT;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({
origin: 'http://localhost:3000',
methods: ['GET', 'POST', 'PUT'],
credentials: false,
}));

// mogoose.connect('mongodb://127.0.0.1:27017/invoice');

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.get('/Faculty', async (req, res) => {
    // const faculty = await Faculty.find({FacultyEmail: "faculty@bitsathy.ac.in"});
    // res.send(faculty);
    // const user = await Users.find({email: "test1.al22@bitsathy.ac.in"});
    // res.send(user);
    const invoice = await Invoice.find({StudentName: "Saran S M"});
    res.send(invoice);
});

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

app.post("/verifyToken", async (req, res) => {
    const token = req.body.token;
    try {
        console.log("Verifying token....");
        const token = req.body.token;
        console.log(token);
        const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log(decoded);
        return res.status(200).send({message: "Token verified"});
    //     const user = await Users.findOne({email: req.body.email});
    //     if (token == null) return res.sendStatus(401);

    // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, username) => {
    //     if (err) return res.sendStatus(403);
    //     req.username = username;
    //     return res.status(200).send({message: "Token verified"});
    // })
    //     return decoded;
    } catch (err) {
        // Handle errors here
        console.error("Error decoding token: ", err);
        return res.status(403).send({message: "Token not verified"});
    }


    // const authHeader = req.headers['authorization'];
    // const token = authHeader && authHeader.split(' ')[1]; 
    // 
});

// function decodeToken(token) {
//     try {
//         const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//         return decoded;
//     } catch (err) {
//         // Handle errors here
//         console.error("Error decoding token: ", err);
//         return null; // Or handle the error in a way that fits your application's logic
//     }
// }

app.post('/getUsers', async (req, res) => {
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
// getData = async() => {
// try {
// const us = await Users.findOne({email:"saran.al22@bitsathy.ac.in"})
// console.log(us._id)
//     } catch (error) {
//         console.log(error)
//     }
// }
//     getData();
//     console.log("sucess")
// }
// else{
// console.log("********************")
// }