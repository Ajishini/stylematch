const express = require("express")
const userRouter = express.Router()

const { createUser, loginUser, findUser } = require("../controllers/user.controller")

const { verify } = require("../utils/verify");
const { adminVerify } = require("../utils/admin.verify");

userRouter.post("/signup", createUser)
userRouter.post("/login", loginUser)
userRouter.get("/", verify, adminVerify, findUser)

module.exports = userRouter;