import React, { useContext } from 'react'
import { Box } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import BodyPart from './BodyPart/BodyPart'
import ExerciseCard from '../components/ExerciseCard/ExerciseCard'

import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext)
  return (
    <button onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </button>
  )
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext)
  return (
    <button onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </button>
  )
}

const HorizontalScrollbar = ({
  data,
  selectedBodyPart,
  setSelectedBodyPart,
  isBodyParts,
}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {isBodyParts ? (
            <BodyPart
              item={item}
              selectedBodyPart={selectedBodyPart}
              setSelectedBodyPart={setSelectedBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar
