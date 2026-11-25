const mongoose = require("mongoose");
const wishlistSchema = new mongoose.Schema
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
                }
            }
        ]
    })

const Wishlist = mongoose.model("wishlist", wishlistSchema);
module.exports = Wishlist;

// const mongoose = require("mongoose");

// const item = new mongoose.Schema({
//     item: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "products",
//         required: true
//     }
// }, {_id: false} )

// const wishlistSchema = new mongoose.Schema
//     ({
//         user: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "user",
//             required: true,
//             unique: true
//         },

//         items: [item]
//     })

// const Wishlist = mongoose.model("wishlist", wishlistSchema);
// module.exports = Wishlist;