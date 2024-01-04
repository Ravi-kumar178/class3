const express = require("express");
const router = express.Router();

//import controller now
const {createTodo} = require("../controller/createTodo");
const {getTodo} = require("../controller/getTodo");
const {getTodoByID} = require("../controller/getTodoByID")
const {updateTodo} = require("../controller/updateTodo")
const {deleteTodo} = require("../controller/deleteTodo");

//define route
router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getTodoByID);
router.put("/updateTodo/:id",updateTodo);
router.put("/deleteTodo/:id",deleteTodo);

module.exports = router