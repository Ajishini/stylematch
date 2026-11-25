const mongoose = require("mongoose")
const orderSchema = new mongoose.Schema
({
    user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true
        },
        
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "products",
                required: true
            },
            quantity: {
                type: Number,
                default: 1,
                min: 1
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],

    totalAmount: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
        default: "pending"
    },

    paymentStatus: {
        type: String,
        enum: ["pending", "success"],
        default: "pending"
    },

    contactDetails: {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        }
    },

    shippingAddress: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        pincode: {
            type: String,
            required: true
        }
    },
})

const Order = mongoose.model("order", orderSchema)
module.exports = Order;