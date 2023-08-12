const express = require('express');
const router = express.Router()
const {createWorkout,getWorkout,getWorkouts,updateWorkout,delteWorkout } = require('../Controllers/workoutControllers')


//get all workouts
router.get('/',getWorkouts);


// get a single workout 
router.get('/:id' , getWorkout);


//POST a new request
router.post('/' ,createWorkout);


//DELETE a workout
router.delete('/:id' , delteWorkout)
//UPDATE a new workout
router.patch('/:id' , updateWorkout)
module.exports = router;  