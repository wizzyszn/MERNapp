const Workout = require('../models/WorkoutModel')
const mongoose = require('mongoose')

// get all workouts
const getWorkouts = async function(req,res){
    //get all of the objects and sort them by their created date in ascending order
    const workouts = await Workout.find().sort({createdAt : -1});
    res.status(200).json(workouts)
    
}



//get a single workout
const getWorkout = async function(req,res){
    const id = req.params.id
if (!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({error : "the Id provided does not exist"})

}

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({"error" : "No such workout"})
    }
else{
    res.status(200).json(workout)
}

}



// create a workout
const createWorkout = async function(req,res){
     const {title,load,reps} = req.body

     //add doc to Database
    try{
        const workout =await Workout.create({title,load,reps});
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json({error : error.message})

    }
    
}



//delete a workout
const delteWorkout = async function(req,res){
const id = req.params.id
if(!mongoose.Types.ObjectId.isValid(id)){
   return res.status(400).json({message : "Cant delete an invald id"})
}
const workout = await Workout.findByIdAndDelete({_id : id})

if(!workout){
    return res.status(404).json({error : "no such workout"})
}
else{
    res.status(200).json(workout)
}



}
// update a workout
const updateWorkout = async function(req,res){
const id = req.params.id
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({message : "not a valid Id"})
}

const workout = await Workout.findOneAndUpdate({_id : id} ,{
    ...req.body
})

if(!workout){
    res.status(404).json({error : "Id for this wworkout is not found"});   
}else{
    res.status(200).json(workout)
}


}




module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    updateWorkout,
    delteWorkout
}