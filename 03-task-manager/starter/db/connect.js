const mongoose = require('mongoose')


const connectionString = 'mongodb+srv://shaun:dresden1697@nodeexpressproject.pf5zn.mongodb.net/03-TASK-MANAGER?'

const connectDB = (url) =>{
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex:true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB;

