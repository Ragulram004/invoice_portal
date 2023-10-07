const express = require('express');
const mogoose = require('mongoose');
const Users = require('./models/Users');
const cors = require('cors');


const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());

mogoose.connect('mongodb://127.0.0.1:27017/invoice');

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.post('/getUsers', async (req, res) => {
    // const newUser = new Users({email: req.body.email});
    // await newUser.save();

    const user = await Users.findOne({email: req.body.email});
    // console.log(newUser);
    if (user) 
    {
        return res.status(200).send({message: "User already registered."});
    }
});

// app.get('/user', async (req, res) => {
//     const user = await User.findOne({email: req.body.email});
//     if (user) return res.status(409).send({message: "User already registered."});
// }) 


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});