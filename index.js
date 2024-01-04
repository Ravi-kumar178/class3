const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse data
app.use(express.json());

const route = require("./route/Todo")
//mount the route
app.use("/api/v1",route);

//start the server
app.listen(PORT,()=>{
    console.log(`Server started successfully ${PORT}`);
})

//import dbconnection
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send("<h1>Hello Developer</h1>")
})