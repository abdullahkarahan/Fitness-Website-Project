import React, { useEffect, useState } from 'react'
import { Pagination } from '@mui/material'
import ExerciseCard from '../ExerciseCard/ExerciseCard'
import './Exercises.css'

import { exerciseOptions, fetchData } from '../../utils/fetchData'

const Exercises = ({ setExercises, selectedBodyPart, exercises }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1400, behavior: 'smooth' })
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []

      if (selectedBodyPart === 'all') {
        exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          exerciseOptions
        )
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}`,
          exerciseOptions
        )
      }
      setExercises(exercisesData)
    }
    fetchExercisesData()
  }, [selectedBodyPart])

  const exercisesPerPage = 3
  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercise = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  )

  return (
    <section className="exercises">
      {/*Exercise List*/}
      <h3 className="show-title">Showing Results</h3>
      <div className="show-results">
        {currentExercise.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
      <div>
        {/*Pagination*/}
        <Pagination
          color="standard"
          shape="rounded"
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
        />
      </div>
    </section>
  )
}

export default Exercises
