const express = require("express");
const router = express.Router();
const menuItem = require('./../models/menuItem');

router.post('/', async (req, res)=>{
    try{
        const data = req.body;
        const newMenuItem = new menuItem(data);
        const response = await newMenuItem.save();
        console.log("menu items data saved successfully");
        res.status(200).json(response);
    }
    catch(error) {
        console.log(error);
        res.status(500).json({error:"Internal Sever Error"});
    }
});

router.get('/', async (req, res) => {
    try{
        const data = await menuItem.find();
        console.log("Data fetched successfully");
        res.status(200).json(data);
    }
    catch(error) {
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});
    }
});

router.get('/:taste', async (req, res) => {
    try{
        var tasteType = req.params.taste;
        if(tasteType =="sour" || tasteType=="sweet" || tasteType=="spicy") {
            const data = await menuItem.find({taste:tasteType});
            console.log("Data fetched successfully");
            res.status(200).json(data);
        }
        else {
            res.status(404).json({error:"Page Not found"});
        }
    }
    catch(error) {
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});
    }
});

module.exports = router;