    function WorkoutDetails(props) {
        return ( <>
        <div className="workout-details">
            <h4>{props.workout.title}</h4>
            <p><strong>REPS: </strong>{props.workout.reps}</p>
            <p>{props.workout.createdAt}</p>
            <p>{props.workout._id}</p>
        </div>
        </>);
    }
    
    export default WorkoutDetails;