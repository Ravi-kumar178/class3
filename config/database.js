const mongoose = require("mongoose");

require("dotenv").config() //dotenv library is used to fed the entire data of env file to the process object
//function to create node application to database
const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log("Connection Established Successfully")})
    .catch((error)=>{
        console.log("Error in connection");
        console.log(error.message);
        process.exit(1);
    });
}

module.exports = dbConnect;