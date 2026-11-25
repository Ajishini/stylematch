const WishlistModel = require("../models/wishlist.model")

exports.addToWishlist = async(userId, productId) => {

    let wishlist = await WishlistModel.findOne({ user: userId });

    if(!wishlist) {
        wishlist = new WishlistModel ({
            user: userId,
            items: []
        });
    }

    const item = wishlist.items.find (
        item => item.product.toString() == productId
    );

     if (item) {
            return wishlist;
        }
    else {
        wishlist.items.push ({
            product: productId
        });
    }

    await wishlist.save();
    return wishlist;
}

exports.findWishlist = async(userId) => {
    const findwishlist = await WishlistModel.findOne({ user: userId })
        .populate("items.product");

    return findwishlist;
}

exports.removeFromWishlist = async(userId, productId) => {
    const wishlist = await WishlistModel.findOne({ user: userId });

    if (!wishlist) {
        return null;
    }

    wishlist.items = wishlist.items.filter (
        item => item.product.toString() != productId
    );

    await wishlist.save();
    return wishlist;
}