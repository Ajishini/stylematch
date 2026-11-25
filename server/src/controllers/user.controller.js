const userService = require("../services/users.service");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const JWT_SECRECT = process.env.JWT_SECERET

exports.createUser = async(req, res) => {
    const user = req.body;

    if(user.username.trim().length == 0) {
        return res.json({
            sucess: false,
            message: "Enter a valid username"
        });
    }

    if(user.email.trim().length == 0) {
        return res.json({
            sucess: false,
            message: "Enter a valid email"
        });
    }
    
    if(user.password.trim().length == 0) {
        return res.json({
            sucess: false,
            message: "Enter a valid password"
        });
    }
    
    const passwordHash = await bcrypt.hash(user.password, 10);

    user.password = passwordHash;

    const newUser = await userService.createUser(user);

    const token = jwt.sign( 
        {
            id: newUser._id,
            email: newUser.email,
            role: newUser.role
        }, 
        JWT_SECRECT, 
        { expiresIn: '1m' }
    );

    res.json({
        success: true,
        message: "User created successfully",
        user: {
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            role: newUser.role
        },
        token: token
    });
};

exports.loginUser = async(req, res) => {
    const user = req.body;

    if(user.email.trim().length == 0) {
        return res.json({
            sucess: false,
            message: "Enter a valid email"
        });
    }
    
    if(user.password.trim().length == 0) {
        return res.json({
            sucess: false,
            message: "Enter a valid password"
        });
    }

    const dbUser = await userService.findUserByEmail(user.email);

    if (!dbUser) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    const isMatch = await bcrypt.compare(user.password, dbUser.password);

    if(!isMatch) {
        return res.status(400).json({
            success: false,
            message: "Invalid email or password"
        });
    }

    const token =  jwt.sign(
        {
            id: dbUser._id,
            email: dbUser.email,
            role: dbUser.role
        },
        JWT_SECRECT,
        { expiresIn: "10h" }
    );

    res.status(200).json({
        success: true,
        message: "Login sucessfully",
        token: token,
        user: {
            id: dbUser._id,
            username: dbUser.username,
            email: dbUser.email,
            role: dbUser.role
        }
    });
};

exports.findUser = async (req, res) => {
    const users = await userService.findUser()
    res.json({
        success: true,
        user: users
    });
};