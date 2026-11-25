const jwt = require("jsonwebtoken");
const JWT_SECRECT = process.env.JWT_SECERET;

exports.verify = (req, res, next) => {
    try {
        console.log(req.headers.authorization);
        const token = req.headers.authorization.split(" ")[1];

        console.log(token)

        if(!token){
            return res.status(401).json({
                sucess: false,
                messge: "Token not provided"
            });
        }
     
        const user = jwt.verify(token, JWT_SECRECT);

            req.user = user;

            next();
    }
    catch(err) {
        console.log(err);
        return res.status(401).json({
            succes: false,
            message: "Session expired..."
        });
    }
}