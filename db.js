const mongoose = require("mongoose");
require("dotenv").config();
//const mongoURL = process.env.MOBGODB_LOCAL_URL;
const mongoURL = process.env.MONGODB_URL;
/*mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('connnected',()=>{
    console.log("Mogodb is connected")
});

db.on('error',(err)=>{
    console.log("Mongodb connection error:-"+err)
});

db.on('disconnected',()=>{
    console.log("Mongodb is disconnected");
});
*/

mongoose.connect(mongoURL)
    .then(() => {
        console.log('Connected to MongoDB successfully');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });


module.exports = mongoose;