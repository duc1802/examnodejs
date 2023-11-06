require("dotenv").config();
const express = require("express");
const app = express(); 
const bodyParser = require('body-parser');
const port = 3333;

app.listen(port,function(){
    console.log("Server is running...");
})

app.set('views', 'D:/nodejs/examnodejs/views');
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

require("./src/db/connect");


const home_route = require('./src/routes/home.route');
app.use('/', home_route);

