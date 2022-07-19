import React from 'react'
import {Avatar} from '@mui/material'
import './Story.css'

function Story({image,profileSrc ,title}) {
  return (
    <div style={{backgroundImage:`url(${image})`}} className="Story">
        <Avatar className="story-avatar" src={profileSrc} />
        <h4>{title}</h4>
    </div>
  )
}

export default Story