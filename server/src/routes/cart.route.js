const express = require("express")
const cartRouter = express.Router()

const { addToCart, findCart, removeFromCart, updateCart } = require("../controllers/cart.controller");

const { verify } = require("../utils/verify");

cartRouter.post("/", verify, addToCart)
cartRouter.get("/", verify, findCart)
cartRouter.put("/:id", verify, updateCart)
cartRouter.delete("/:productId", verify, removeFromCart)

module.exports = cartRouter;