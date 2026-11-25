const UserModel = require("../models/user.model")

exports.createUser = async(body) => {
    try{
        const newUser = await UserModel.create(body);
        return newUser;
    }
    catch(err) {
        console.log(err);
        throw err;
    }
};

exports.findUser =  async() => {
    try{
        const users = await UserModel.find();
        return users;
    }
    catch(err) {
        console.log(err)
        throw err;
    }
};

exports.findUserByEmail = async(email) => {
    try{
        const user = await UserModel.findOne({email: email});
        return user;
    }
    catch(err) {
        console.log(err)
        throw err;
    }
};