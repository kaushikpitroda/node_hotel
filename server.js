const express = require('express');
const app = express();
const db = require("./db");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());


//const res = require('express/lib/response');
const hostel = require("./models/hostel");

app.post('/hostel', async (req, res)=>{
    try{
        const data = req.body;
        const hostelItem =new hostel(data);
        const response = await hostelItem.save();
        console.log("Data inserted successfully")
        res.status(200).json(response);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});
    }
})


app.get('/hostel', async (req, res) =>  {
    try{
        const data = await hostel.find();
        console.log("Data fetched successfully");
        res.status(200).json(data);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:"Internal Server Error"})
    }
})

/*app.get('/',function(req,res){
    res.send('Welcome to my hotel how can i help you? We have list of menus');
});*/

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menuItem', menuRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log("Listening on port 3000")
})