const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const dbConnect = require('./dbConnect')
dbConnect();

const port = process.env.PORT;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT'],
    credentials: false,
}));

//Routes
const facultyRoutes = require('./routes/faculty.js');
const userRouter = require('./routes/Login.js');
const invoiceRouter = require('./routes/Invoice.js');
const proposal = require('./routes/proposal.js');
app.use(facultyRoutes);
app.use(userRouter);
app.use(invoiceRouter);
app.use(proposal);


// app.get('/checkToken', authenticateToken, (req, res) => {
//     res.send({valid: true});
// });

// function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1]; 
//     if (token == null) return res.sendStatus(401);

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, username) => {
//         if (err) return res.sendStatus(403);
//         req.username = username;
//         next();
//     })
// }

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});