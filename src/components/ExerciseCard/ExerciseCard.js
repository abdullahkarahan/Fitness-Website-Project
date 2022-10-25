import React from 'react'
import './ExerciseCard.css'

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} Loading="lazy" />
      <div className="exercise-btn-container">
        <button className="exercise-card-btn btn">{exercise.bodyPart}</button>
        <button className="exercise-card-btn btn">{exercise.target}</button>
      </div>
      <h3 className="exercise-name">{exercise.name}</h3>
    </div>
  )
}

export default ExerciseCard
