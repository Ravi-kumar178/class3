//import the model
const Todo = require("../model/Todo");

//define the business logic
exports.createTodo = async(req,res)=>{
    try{
        //fetch the data of title and description from the body
        const {title,description} = req.body;
        //create the entry in data base and post the data
        const response = await Todo.create({title,description});
        //show the success flag after creation of entry
        res.status(200).json({
            success:true,
            data:response,
            message:"Entry Created Successfully"
        });
    }
    catch(err){
         console.log(err);
         res.status(500).json({
            success:false,
            data:"Server Error while entry creation",
            message:err.message
         })
    }
}