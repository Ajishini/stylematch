const categoryService = require("../services/categories.service")

exports.createCategory = async(req, res) => {
    const category = req.body;

    if(category.name.trim().length == 0) {
        return res.json({
            success: false,
            message: "Enter a valid category name"
        });
    }

    if(category.image.trim().length == 0) {
        return res.json({
            success: false,
            message: "provide a valid image url"
        });
    }

    const newCategory = await categoryService.createCategory(category);
    res.json({
        success: true,
        todo: newCategory
    });
}

exports.findCategory = async(req,res) => {
    const categories = await categoryService.findCategory()
    res.json({
        sucess: true,
        data: categories
    })
}

exports.updateCategory = async(req,res) => {
    const id = req.params.id;
    const category = req.body;

    if(category.name.trim().length == 0) {
        res.json({
            success: false,
            message: "Enter a valid category name"
        });
    }

    if(category.image.trim().length == 0) {
        res.json({
            success: false,
            message: "Image"
        });
    }

    const updatedcategory = await categoryService.updateCategory(id, category)
    res.json({
        success: true,
        message: "Category updated successfully",
        data: updatedcategory
    });
}

exports.deleteCategory = async(req,res) => {
    const id = req.params.id;
    const deletecategory = await categoryService.deleteCategory(id)
    res.json({
        data: deletecategory
    })
}