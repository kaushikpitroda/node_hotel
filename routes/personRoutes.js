const express = require('express');
const router = express.Router();
const person = require('./../models/person');
router.get('/',async (req, res)=>{
    try{
        const data = await person.find();
        console.log("Data fetched successfully");
        res.status(200).json(data);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});
    }
});

router.post('/',async (req, res)=>{
    try{
        const data = req.body;
        const newPerson = new person(data);
        // newPerson.name = data.name;
        /* newPerson.save((error, personResponse)=>{
            if(error) {
                console.log("Error saving person", error);
                res.status(500).json({error:"Internal Server Error"});
            }
            else {
                console.log("Data saved successfully");
                res.status(200).json(personResponse);
            }
        });*/
        const response = await newPerson.save();
        console.log("Dava saved successfully");
        res.status(200).json(response);
    }
    catch(error) {
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});
    }
});
router.get('/:work', async (req, res)=>{
    try{
        const workType = req.params.work;
        if(workType =='chef' || workType=="manager" || workType=="writter") {
            const data = await person.find({work:workType});
            console.log("response fetched");
            res.status(200).json(data);
        }
        else {
            res.status(404).json({error:"Invalid work type"});
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});
    }

});

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updatedPersonData = req.body;
        const response = await person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidators: true
        });
        if(!response) {
            res.status(404).json({error: "Page Not Found"});
        }
        console.log("data updated");
        res.status(200).json(response);
    }
    catch(error) {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});
    }
});

router.delete('/:id', async (req, res) =>{
    try {
        const personId = req.params.id;
        const response = await person.findByIdAndDelete(personId);
        if(!response) {
            res.status(404).json({error:"ID not found"});
        }
        console.log("Selected data has been removed.");
        res.status(200).json({message: "Person deleted successfully"});
    }
    catch(error) {
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});
    }
});
module.exports = router;