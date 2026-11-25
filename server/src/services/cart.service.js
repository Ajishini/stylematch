const CartModel = require("../models/cart.model")

exports.addToCart = async(userId, productId, quantity) => {
console.log({userId, productId, quantity})
    let cart = await CartModel.findOne({ user: userId });

    if(!cart) {
        cart = new CartModel ({
            user: userId,
            items: []
        });
    }

    const item = cart.items.find (
        item => item.product.toString() == productId
    );

    if(item){
        item.quantity += Number(quantity || 1);
    }
    else{
        cart.items.push({
            product: productId,
            quantity: Number(quantity || 1)
        });
    }

    await cart.save();
    return cart;
}

exports.findCart = async(userId) => {
   
    const findcart = await CartModel.findOne({ user: userId })
        .populate("items.product");

    return findcart;
}

exports.getCartForUpdate = async(userId) => {
   
    const findcart = await CartModel.findOne({ user: userId })

    return findcart;
}

exports.updateCart = async(id, product) => {
    console.log(id)
    try{
        console.log(product);
        const updatedCart = await CartModel.findOneAndUpdate({user: id}, product, {new: true});
        return updatedCart;
    }
    catch(err) {
        console.log(err);
        throw err;
    }
};

exports.removeFromCart = async(userId, productId) => {
    const cart = await CartModel.findOne({ user: userId });

    if(!cart){
        return null;
    }

    cart.items = cart.items.filter(
        item => item.product.toString() != productId
    );

    await cart.save();
    return cart;
}

exports.emptyCart = async (userId) => {
    const cart = await CartModel.findOne({ user: userId });

    cart.items = [];
    await cart.save();
}