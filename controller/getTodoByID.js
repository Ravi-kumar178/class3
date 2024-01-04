//extract to do item basis on their id
//import the model
const Todo = require("../model/Todo");

//business logic
exports.getTodoByID = async(req,res)=>{
    try{
        //import id firstly
        const {id} = req.params;
        //fetch the data
        const todo = await Todo.findById({_id:id});
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No Data Found"
            })
        }

        res.status(200).json({
            success:true,
            data:todo,
            message:"Data fetched by ID"
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:err.message,
            data:"Error in fetching data"
        })
    }
}
