const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const fs = require('fs');

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

// const logFilePath = 'ip_logs.txt';

// app.use((req, res, next) => {
//     const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
//     const currentTime = new Date().toISOString();
//     console.log(`Client IP: ${ip} at ${currentTime}`);
    
//     // Append the IP address with the current time to a file
//     fs.appendFile(logFilePath, `${currentTime} - ${ip}\n`, (err) => {
//       if (err) throw err;
//       console.log('IP address with time appended to file');
//     });
  
//     next();
//   });

//Routes
const facultyRoutes = require('./routes/faculty.js');
const userRouter = require('./routes/Login.js');
const invoiceRouter = require('./routes/Invoice.js');
const proposal = require('./routes/proposal.js');
const withdrawn = require('./routes/Withdrawn.js');
const Rejected = require('./routes/Rejected.js');
const StudentStatus = require('./routes/StudentStatus.js');
const Modaldata = require('./routes/modal.js');
const Completed = require('./routes/Completed.js');
const faculty_proposal = require('./routes/faculty routes/faculty_proposal.js');
const faculty_approved = require('./routes/faculty routes/faculty_approved.js');
const faculty_completed = require('./routes/faculty routes/faculty_completed.js');
const faculty_rejected = require('./routes/faculty routes/faculty_rejected.js');
const system_number = require('./routes/faculty routes/system_number.js');
const DashBoard = require('./routes/Dashboard.js');
app.use(facultyRoutes);
app.use(userRouter);
app.use(invoiceRouter);
app.use(proposal);
app.use(withdrawn);
app.use(Rejected);
app.use(StudentStatus);
app.use(Modaldata);
app.use(Completed);
app.use(faculty_proposal);
app.use(faculty_approved);
app.use(faculty_completed);
app.use(faculty_rejected);
app.use(system_number);
app.use(DashBoard);


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