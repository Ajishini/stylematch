const mongoose = require("mongoose");

const productSchema = new mongoose.Schema
({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    originalprice: {
        type: Number,
        required: true
    },
    actualprice: {
        type: Number,
        required: true
    },
    discount: {
        type: String,
        required: true
    },
    size: [{
        type: String,
        required: true
    }],
    qty: {
        type: Number
    },
    description: {
        type: String
    },
    category_id: {
        type: mongoose.Schema.ObjectId,
        ref: "categories"
    },
    image: {
        type: String,
        required: true
    }
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;