const mongoose = require("mongoose")
const categorySchema = new mongoose.Schema
({
    number: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
        unique: true
    }
})

const Category = mongoose.model("categories", categorySchema)
module.exports = Category;