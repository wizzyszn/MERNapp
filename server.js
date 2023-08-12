const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config()
const morgan = require('morgan')
const workoutRoutes = require('./Routes/workout')
const mongoose = require('mongoose')
mongoose.connect(process.env.dbURI).then(() =>{
    console.log("connected to database")
}).then((result)=>{
    app.listen(process.env.PORT, () =>{
        console.log('listening on port 4000....')
    })

}).catch((err) =>{
console.log(err)
})
//middleware
//app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
//Workout Routes
app.use('/api/workouts/', workoutRoutes)  //Base Routes


