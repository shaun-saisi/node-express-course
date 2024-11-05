const Task = require('../models/task')


//getting all the trasks
const getAllTasks = async (req,res)=>{
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

// Creating a task
const createTask = async (req,res) => { 
    try {
        const task = await Task.create(req.body)
    res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
    
}

//Getting a task
const getTask = async (req,res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID});
    if(!task){
        return res.status(404).json({msg:`No task with id : ${taskID}`})
    }

        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error}) 
    }
    
}


//Updating the task
const updateTask = (req,res) => {
    res.send('update task')
}

//Deleting a task
const deleteTask = async (req,res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if (!task) {
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
    
}



module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}