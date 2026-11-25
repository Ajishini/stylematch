const express = require("express")
const wishlistRouter = express.Router()

const { verify } = require("../utils/verify");

const { findWishlist, removeFromWishlist, addToWishlist } = require("../controllers/wishlist.controller");

wishlistRouter.post("/", verify, addToWishlist)
wishlistRouter.get("/", verify, findWishlist)
wishlistRouter.delete("/:productId", verify, removeFromWishlist)

module.exports = wishlistRouter;