const wishlistService = require("../services/wishlist.service")

exports.addToWishlist = async(req, res) => {
    
    const userId = req.user.id;
    const productId = req.body.productId;

    const wishlist = await wishlistService.addToWishlist(userId, productId);

    res.json({
        success: true,
        message: "Product added to wishlist",
        data: wishlist
    });
}

exports.findWishlist = async(req, res) => {
    const userId = req.user.id;
    const wishlist = await wishlistService.findWishlist(userId);
    res.json({
        data: wishlist
    });
}

exports.removeFromWishlist = async(req, res) => {
    const userId = req.user.id;
    const productId = req.params.productId;

    const wishlist = await wishlistService.removeFromWishlist(userId, productId);

    res.json({
        success: true,
        message: "Product removed from wishlist",
        data: wishlist
    });
}