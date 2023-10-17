const router = require('express').Router();

const jwt = require('jsonwebtoken');

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

router.post("/verifyToken", async (req, res) => {
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

module.exports = router