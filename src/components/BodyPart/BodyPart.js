import React from 'react'
import { Stack } from '@mui/material'
import './BodyPart.css'
import Icon from '../../assets/icons/gym.png'
const BodyPart = ({ item, selectedBodyPart, setSelectedBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: selectedBodyPart === item ? '4px solid black' : '',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px',
      }}
      onClick={() => {
        setSelectedBodyPart(item)
        window.scrollTo({ top: 1400, left: 100, behavior: 'smooth' })
      }}
    >
      {/*Body Part Icon & Title */}
      <img src={Icon} alt="dumbell" className="body-part-icon" />
      <h3 className="item-title">{item}</h3>
    </Stack>
  )
}

export default BodyPart
