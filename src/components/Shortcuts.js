import React from 'react'
import './Shortcuts.css'
import {Avatar} from '@mui/material'

function Shortcuts({src,title}) {
  return (
    <div className="Shortcuts">
        
        {src && <Avatar src={src}/>}
        <h3>{title}</h3>
    </div>
  )
}

export default Shortcuts