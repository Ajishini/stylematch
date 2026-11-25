const express = require("express")
const productRouter = express.Router()

const { createProduct, findProduct, updateProduct, deleteProduct,findProductById } = require("../controllers/products.controller")

const { verify } = require("../utils/verify");
const { adminVerify } = require("../utils/admin.verify");

productRouter.post("/", verify, adminVerify, createProduct)
productRouter.get("/", findProduct)
productRouter.put("/:id", verify, adminVerify, updateProduct)
productRouter.delete("/:id", verify, adminVerify, deleteProduct)
productRouter.get("/:id", findProductById)

module.exports = productRouter;