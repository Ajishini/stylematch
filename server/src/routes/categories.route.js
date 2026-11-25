const express = require("express")
const categoryRouter = express.Router()

const { createCategory, findCategory, updateCategory, deleteCategory } = require("../controllers/categories.controller")

const { verify } = require("../utils/verify")
const { adminVerify } = require("../utils/admin.verify")

categoryRouter.post("/", verify, adminVerify, createCategory)
categoryRouter.get("/", findCategory)
categoryRouter.put("/:id", verify, adminVerify, updateCategory)
categoryRouter.delete("/:id", verify, adminVerify, deleteCategory)

module.exports = categoryRouter;