const express = require("express");
const connectDB = require("./backend/config/db");
const dotenv = require("dotenv");
const app = express();


dotenv.config();
connectDB();
app.get("/", (req,res)=>{
    res.send("Hello");
});

app.get("/quote", (req, res)=>{
    res.send("Quote");
})

app.listen(5000, ()=>{
    console.log("Server started on  port no. 5000");
});