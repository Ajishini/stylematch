const cartService = require("../services/cart.service")

exports.addToCart = async(req, res) => {
    const userId = req.user.id;
    const { productId, quantity } = req.body;

    const cart = await cartService.addToCart(userId, productId, quantity);

    res.json({
        success: true,
        message: "Product added to cart",
        data: cart
    });
}

exports.findCart = async(req, res) => {
    const userId = req.user.id;

    const cart = await cartService.findCart(userId);
    res.json({
        data: cart
    });
}

exports.updateCart = async(req, res) => {
    const id = req.params.id;
    const product = req.body;
    
    
    let cart = await cartService.getCartForUpdate(req.user.id);

    cart.items = cart.items.map(cartItem => { 
       
        if( cartItem.product.toString() == id) 
        {
            cartItem.quantity = product.quantity;
        }
        return cartItem;
    });

    console.log(cart);

    const updatedCart = await cartService.updateCart(req.user.id, cart);
    res.json({
        message: true,
        message: "Cart updated successfully",
        data: updatedCart
    })
}

exports.removeFromCart = async(req, res) => {
    const userId = req.user.id;
    const productId = req.params.productId;

    const cart = await cartService.removeFromCart(userId, productId);

    res.json({
        success: true,
        message: "Product removed from cart",
        data: cart
    });
}