const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')


//getting all the trasks
const getAllTasks = asyncWrapper(async (req,res)=>{
        const tasks = await Task.find({})
        res.status(200).json({ tasks})
  
}) 

// Creating a task
const createTask = asyncWrapper( async (req,res) => { 

    const task = await Task.create(req.body)
    res.status(201).json({task})
})

//Getting a task
const getTask = asyncWrapper(async (req,res) => {

        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID});
    if(!task){
        return res.status(404).json({msg:`No task with id : ${taskID}`})
    }

        res.status(200).json({task})
   
})


//Updating the task
const updateTask = asyncWrapper( async (req,res) => {
   
        const {id:taskID} = req.params;

        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,runValidators:true,
        })

        if (!task) {
            return res.status(404).json({ msg: `No task with id: ${taskID}`})
        }

        res.status(200).json({task})
   
})

//Deleting a task
const deleteTask = asyncWrapper( async (req,res) => {
   
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if (!task) {
            return res.status(404).json({msg:`No task with id : ${taskID}`})
        }
        res.status(200).json({task: null, status: 'success'})
   
})



module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}