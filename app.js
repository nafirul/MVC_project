const express = require("express");
const app=express();
const bodyParser=require("body-parser");
const cors= require("cors");

const router= require("./router/router.routers")

app.use(cors());
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use('/users',router)

app.get('/',(req,res)=>{
    res.send("my name is nafirul islam nahid");
})

app.get("/user",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
})






app.use((req,res)=>{
    res.send("404 Not found")
})




module.exports=app;