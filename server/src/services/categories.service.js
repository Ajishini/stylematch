const CategoryModel = require("../models/categories.model")

exports.createCategory =  async(body) => {
    try{
        const newCategory = await CategoryModel.create(body);
        return newCategory
    }
    catch(err) {
        console.log(err);
        throw err;
    } 
};

exports.findCategory =  async() => {
    try{
        const categories = await CategoryModel.find();
        return categories
    }
    catch(err) {
        console.log(err);
        throw err;
    }
};

exports.updateCategory = async(id, category) => {
    try{
        const updatedCategory = await CategoryModel.findByIdAndUpdate(id, category, {new:true});
        return updatedCategory
    }
    catch(err) {
        console.log(err);
        throw err;
    } 
};

exports.deleteCategory = async(id) => {
    try{
        const deletecategory = await CategoryModel.findByIdAndDelete(id);
        return deletecategory
    }
    catch(err) {
        console.log(err);
        throw err;
    }
};