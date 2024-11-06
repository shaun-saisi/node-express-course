

const express = require('express');
const app = express();
const routes = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config()

const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware

app.use(express.json())
app.use(express.static('./public'))

//routes

app.use('/api/v1/tasks',routes)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000


const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`));

    }catch (error){
        res.status(500).json({msg:error})
        
    }
}

start()