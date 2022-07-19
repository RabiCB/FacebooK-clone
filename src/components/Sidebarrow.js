import React from 'react'
import { Avatar } from '@mui/material'
import './Sidebarrow.css'

const Sidebarrow = ({title , Icon ,src}) => {
  return (
    <div className="Sidebarrow">
        {src && <Avatar src={src}/>}
        {Icon && <Icon/>}
        <h4>{title}</h4>
    </div>
  )
}

export default Sidebarrow