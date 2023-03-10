const mongoose = require("mongoose");

const userSchame = new mongoose.Schema({
    _id: String,
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        minLength: [3, "The minimum length must be three characters."]
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
});

const User = mongoose.model("User", userSchame);

module.exports = User;