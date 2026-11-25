const ProductModel = require("../models/products.model")

exports.createProduct =  async(body) => {
    try{
        const newProduct = await ProductModel.create(body);
        return newProduct;
    }
    catch(err) {
        console.log(err);
        throw err;
    }
};

exports.findProduct = async(limit, search, category) => {
    try {
        let filter = {};

        if (search) {
            filter.name = {
                $regex: search,
                $options: "i"
            };
        }

        if (category) {
            filter.category_id = category;
        }

        let query = ProductModel.find(filter).populate("category_id");

        if (limit) {
            query = query.limit(Number(limit));
        }

        const products = await query;
        return products;
    }
    catch(err) {
        console.log(err);
        throw err;
    }
};

exports.updateProduct = async(id,product) => {
    try{
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, product, {new:true});
        return updatedProduct;
    }
    catch(err) {
        console.log(err);
        throw err;
    }
};

exports.deleteProduct = async(id) => {
    try{
        const deleteproduct = await ProductModel.findByIdAndDelete(id);
        return deleteproduct;
    }  
    catch(err) {
        console.log(err);
        throw err;
    }
};

exports.findProductById = async(id) => {
    try{
        const findproduct = await ProductModel.findById(id).populate("category_id");
        return findproduct;
    }
    catch(err) {
        console.log(err);
        throw err;
    }
};