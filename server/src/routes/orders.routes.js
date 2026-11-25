const express = require("express");
const orderRouter = express.Router();

const { createOrder, findOrders, findOrderById, cancelOrder, updatePaymentStatus } = require("../controllers/orders.controller");
const { verify } = require("../utils/verify");

orderRouter.post("/", verify, createOrder);
orderRouter.get("/", verify, findOrders);
orderRouter.get("/:id", verify, findOrderById);
orderRouter.put("/:id", verify, updatePaymentStatus)
orderRouter.delete("/:id", verify, cancelOrder);

module.exports = orderRouter;