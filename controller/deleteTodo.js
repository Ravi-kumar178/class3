//import model firstly
const Todo = require("../model/Todo");

//business logic
exports.deleteTodo = async(req,res)=>{
    try{
        //fetch the id first
        const {id} = req.params;
        //delete
        const response = await Todo.findByIdAndDelete({_id:id});
        //success flag
        res.status(200).json({
            success:true,
            message:"Deletion done"
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:err.message,
            data:"There is error in deletion process"
        })
    }
}