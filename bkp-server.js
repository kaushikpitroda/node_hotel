/*var _ = require('lodash');
var fs = require('fs');
var os = require('os');
var user = os.userInfo();
console.log(user);
console.log(user.username);
fs.appendFile('greeting.txt', 'Hi'+user.username+'!\n',()=>{console.log('file is created')});
console.log(fs);
console.log(os);
const notes = require('./notes.js');
console.log("Server file is loaded");
var age = notes.age;
console.log(age);
var result = notes.addNumber(age+18,10);
console.log(result);

var data = ['person','person',1,2,2,1,'now'];
var filter = _.uniq(data);
console.log(filter);
console.log(_.isString(3))

const jsonString = '{"name":"john","age":"23","city":"newyork"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);

const objectToConvert = {
    name : "Alice",
    age: 25
};
const jsonStringified = JSON.stringify(objectToConvert);
console.log(jsonStringified);*/
const express = require('express')
const app = express();
const db = require("./db");
/*
app.get('/', function (req, res) {
  res.send('Welcome to my hotel, how can i help you? We have a list of menus')
})

app.get('/chicken', (req, res)=>{
    res.send('Sure sir, i would love to serve chicken')
})

app.get('/idli',(req, res)=>{
    var customized_idli = {
        name: "rave idli",
        size: "10cm diameter",
        is_sambhar: true,
        is_chutney: false
    }
    res.send(customized_idli);
} )
app.post('/items',(req, res)=> {
    res.send("items saved")
})*/

app.listen(3000, ()=>{
    console.log("Server listening port 3000");
})
