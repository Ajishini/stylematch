const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema
({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
        unique: true
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
            }
        }
    ]
})

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;