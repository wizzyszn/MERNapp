import { useEffect, useState } from 'react'
//components
import WorkoutDetails from '../components/WorkOutDetails'

function Home () {
  const [workouts, setWorkouts] = useState(null)
  useEffect(() => {
    const fetchworkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workouts')
      const parsedResponse = await response.json()
      if (response.ok) {
        setWorkouts(parsedResponse)
        console.log(parsedResponse)
      }
    }
    fetchworkouts()
  }, [])
  return (
    <div className='home'>
      <div className='workouts'>
        {
          workouts && workouts.map((workout) =>(
          <WorkoutDetails key={workout._id} workout = {workout}/>
          ))
        }
      </div>
    </div>
  )
}

export default Home
