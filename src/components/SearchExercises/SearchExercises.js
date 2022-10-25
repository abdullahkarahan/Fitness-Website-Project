import React, { useEffect, useState } from 'react'
import { Box, TextField } from '@mui/material'
import './SearchExercises.css'
import { exerciseOptions, fetchData } from '../../utils/fetchData'
import HorizontalScrollbar from '../HorizontalScrollbar'

const SearchExercises = ({
  setExercises,
  selectedBodyPart,
  setSelectedBodyPart,
}) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      )
      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExercisesData()
  }, [])

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      )

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      )

      setSearch('')
      setExercises(searchedExercises)
    }
  }

  return (
    <section id="search-exercises">
      {/*Search Title*/}
      <div className="exercise-text">
        <div>
          <span>Awesome </span>
          <span className="stroke-text">Exercises </span>
          <span>You </span>
          <span className="stroke-text">Should </span>
          <span>Know</span>
        </div>
      </div>

      {/*Search Field*/}
      <Box
        position="relative"
        mb="72px"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '1000px', xs: '200px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <div className="search-btn">
          <button className="search-btn btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </Box>
      {/*Body Part Lists*/}
      <Box sx={{ postion: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar
          data={bodyParts}
          selectedBodyPart={selectedBodyPart}
          setSelectedBodyPart={setSelectedBodyPart}
          isBodyParts
        />
      </Box>
    </section>
  )
}

export default SearchExercises
