const ShoppingList = require("../models/shoppinglist")
const express = require("express")
const router = express.Router();
const mongoose = require("mongoose");
const {v4:uuidv4} = require("uuid")

router.get("/getAll", async (req,res)=>{
    try {
        const ShoppingLists = await ShoppingList.find({});
        res.json(ShoppingLists)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
});

// Add
router.post("/add", async (req, res)=>{
    try {
        const name = req.body.name;
        const amount = req.body.amount;
        const unit = req.body.unit;
        const shoppingList = new ShoppingList()
        shoppingList.name = name
        shoppingList.amount = amount
        shoppingList.unit = unit
        shoppingList._id = uuidv4()

        await shoppingList.save()
        res.json({message: "List updated!"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

// Delete
router.post("/removeById", async(req, res) => {
    try {
        const _id = req.body._id
        await ShoppingList.findByIdAndRemove(_id);
        res.json({message: "List Item deleted!"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

// Update
router.post("/updateById", async(req, res) => {
    try {
        const _id = req.body._id
        const shoppingList = await ShoppingList.findById(_id);
        shoppingList.isCompleted = !shoppingList.isCompleted;
        await ShoppingList.findByIdAndUpdate(_id, shoppingList)
        res.json({message: "List Item updated!"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router;