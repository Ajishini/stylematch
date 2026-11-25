const OrderModel = require("../models/orders.model");
const CartModel = require("../models/cart.model");
const ProductModel = require("../models/products.model");

exports.createOrder = async (userId, contactDetails, shippingAddress) => {

    const cart = await CartModel.findOne({
        user: userId
    }).populate("items.product");

    if (!cart || cart.items.length === 0) {
        return null;
    }

    let totalAmount = 0;
    let orderItems = [];

    for (const item of cart.items) {
        const product = item.product

        if (!product) {
            continue;
        }

        const price = product.actualprice;
        const quantity = item.quantity;

        const amount = price * quantity;

        totalAmount += amount;

        orderItems.push({
            product: product._id,
            quantity: item.quantity,
            price: price
        });
    }

    const newOrder = await OrderModel.create({
        user: userId,
        contactDetails: contactDetails,
        shippingAddress: shippingAddress,
        items: orderItems,
        totalAmount: totalAmount,
        status: "pending",
        paymentStatus: "pending"
    });

    return newOrder;
}

exports.findOrders = async (userId) => {
    const orders = await OrderModel.find({ user: userId })
        .populate("items.product");

    return orders;
}

exports.findOrderById = async (userId, orderId) => {
    const order = await OrderModel.findOne({
        _id: orderId,
        user: userId
    }).populate("items.product");

    return order;
}

exports.cancelOrder = async (userId, orderId) => {
    const order = await OrderModel.findOne({
        _id: orderId,
        user: userId
    });

    if (!order || order.status != "pending") {
        return null;
    }

    order.status = "cancelled";

    await order.save();

    return order;
}

exports.updatePaymentStatus = async (userId, orderId) => {
        const order = await OrderModel.findOne({
            _id: orderId,
            user: userId
        });

        if (!order) {
            return null;
        }

        order.paymentStatus = "success";
        order.status = "confirmed";

        await order.save();

        return order;
};