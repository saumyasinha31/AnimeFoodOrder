var express=require("express");
var bodyParser=require("body-parser");
const {user} = require('./models/user.js');
const db=require('./db/conn.js');

var app=express();
app.use(bodyParser.json());
app.use(express.static('Components'));
app.use(bodyParser.urlencoded({
    extended:true
}));