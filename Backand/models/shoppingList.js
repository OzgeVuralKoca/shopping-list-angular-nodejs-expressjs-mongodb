const mongoose = require("mongoose");

const shoppingListScehama = new mongoose.Schema({
    _id: {
        type:String,
    },
    name:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    isCompleted:{
        type: Boolean,
        default: false
    } 
})

const ShoppingList = mongoose.model("ShoppingList", shoppingListScehama);

module.exports = ShoppingList;