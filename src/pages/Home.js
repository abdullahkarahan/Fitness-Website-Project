import React from 'react'
import { useState } from 'react'
import Hero from '../components/Hero/Hero'
import SearchExercises from '../components/SearchExercises/SearchExercises'
import Exercises from '../components/Exercises/Exercises'
import Plans from '../components/Plans/Plans'
import WhyUs from '../components/WhyUs/WhyUs'

const Home = () => {
  const [exercises, setExercises] = useState([])
  const [selectedBodyPart, setSelectedBodyPart] = useState('all')

  return (
    <div>
      <Hero />
      <SearchExercises
        setExercises={setExercises}
        selectedBodyPart={selectedBodyPart}
        setSelectedBodyPart={setSelectedBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        selectedBodyPart={selectedBodyPart}
        exercises={exercises}
      />
      <Plans />
      <WhyUs />
    </div>
  )
}

export default Home
