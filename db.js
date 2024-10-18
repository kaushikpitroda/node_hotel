const mongoose = require("mongoose");
const mongoURL = 'mongodb://127.0.0.1:27017/hotels';
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