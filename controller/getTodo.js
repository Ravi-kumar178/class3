//import model
const Todo = require("../model/Todo");

//business logic
exports.getTodo = async(req,res)=>{
    try{
        const todos = await Todo.find({});
        //response
        res.status(200).json({
            success:true,
            data:todos,
            message:"Data retrieved"
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Error in Data retrieving",
            message:err.message
        })
    }
}

