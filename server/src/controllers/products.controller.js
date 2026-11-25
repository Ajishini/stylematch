const productService = require("../services/products.service")

exports.createProduct = async (req, res) => {
    const products = req.body;

    const newProducts = [];

    for (const product of products) {

        if (product.name.trim().length == 0) {
            return res.json({
                success: false,
                message: "Enter a valid product name"
            });
        }

        const newProduct = await productService.createProduct(product);
        newProducts.push(newProduct);
    }
    res.json({
        success: true,
        product: newProducts,
    });
}

exports.findProduct = async (req, res) => {
    try {
        const limit = req.query.limit;
        const search = req.query.search;
        const category = req.query.category;

        const products = await productService.findProduct(limit, search, category)
        res.json({
            sucess: true,
            data: products
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Unable to fetch products"
        });
    }
}

    exports.updateProduct = async (req, res) => {
        const id = req.params.id;
        const product = req.body;

        if (product.name.trim().length == 0) {
            res.json({
                success: false,
                message: "Enter a valid product name"
            });
        }

        if (product.size.length == 0) {
            res.json({
                success: false,
                message: "Enter a valid product size"
            });
        }

        if (product.description.trim().length == 0) {
            res.json({
                success: false,
                message: "Enter a valid product description"
            });
        }

        const updatedProduct = await productService.updateProduct(id, product);
        res.json({
            success: true,
            message: "Product updated successfully",
            data: updatedProduct
        });
    }

    exports.deleteProduct = async (req, res) => {
        const id = req.params.id;
        const deleteproduct = await productService.deleteProduct(id)
        res.json({
            data: deleteproduct
        });
    }

    exports.findProductById = async (req, res) => {
        const id = req.params.id;
        const product = await productService.findProductById(id)
        res.json({
            data: product
        });
    }