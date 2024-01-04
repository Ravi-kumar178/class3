const Todo = require("../model/Todo");

//business logic
exports.updateTodo = async(req,res) => {
    try{
        //extract id first
        const {id} = req.params;
        //extract title,description from req.body
        const{title,description,updatedAt} = req.body;

        const response = await Todo.findByIdAndUpdate({_id:id},
            {title,description,updatedAt:Date.now()});

        //show the success flag
         res.status(200).json({
            success:true,
            message:"Entry Updated",
            data:response,
         })   
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:err.message,
            data:"Error in updation data"
        })
    }
}