const ordersService = require("../services/orders.services")
const { sendMail } = require("../utils/mailhelper")
const cartsService = require("../services/cart.service")

exports.createOrder = async (req, res) => {

    const UserId = req.user.id;
    const { contactDetails, shippingAddress } = req.body;

    if (contactDetails == 0) {
        return res.json({
            success: false,
            message: "Enter a valid contact details"
        });
    }

    if (shippingAddress == 0) {
        return res.json({
            success: false,
            message: "Enter a valid shipping address"
        });
    }

    const newOrder = await ordersService.createOrder(UserId, contactDetails, shippingAddress);

    if (!newOrder) {
        return res.json({
            success: false,
            message: "Your cart is empty"
        });
    }

    await sendMail("ajishinisekar@gmail.com");

    res.json({
        success: true,
        message: "Order placed successfully",
        data: newOrder
    });
}

exports.findOrders = async (req, res) => {
    const UserId = req.user.id;

    const orders = await ordersService.findOrders(UserId)
    res.json({
        success: true,
        data: orders
    });
}

exports.findOrderById = async (req, res) => {
    const UserId = req.user.id;
    const orderId = req.params.id;

    const order = await ordersService.findOrderById(UserId, orderId)
    res.json({
        success: true,
        data: order
    });
}

exports.cancelOrder = async (req, res) => {
    const UserId = req.user.id;
    const orderId = req.params.id;

    const order = await ordersService.cancelOrder(UserId, orderId)

    if (!order) {
        return res.json({
            success: false,
            message: "Order not found"
        });
    }

    res.json({
        success: true,
        message: "Order cancelled successsfully",
        data: order
    });
}

exports.updatePaymentStatus = async (req, res) => {
        const userId = req.user.id;
        const orderId = req.params.id;

        const order = await ordersService.updatePaymentStatus(userId, orderId);

        if (!order) {
            return res.json({
                success: false,
                message: "Order not found"
            });
        }

        await cartsService.emptyCart(userId);

        res.json({
            success: true,
            message: "Payment successful",
            data: order
        });
};