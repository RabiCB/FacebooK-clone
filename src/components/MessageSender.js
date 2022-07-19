import React, { useState } from 'react'
import './MessageSender.css'
import { Avatar } from '@mui/material';
import PhotoLibaryIcon from '@mui/icons-material/PhotoLibrary';
import VideocamIcon from '@mui/icons-material/Videocam'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from './StateDataprovider'
import db from './firebase';
import firebase from 'firebase/compat/app'

const MessageSender = () => {

  const [{user},dispatch ]=useStateValue();


  const [input ,SetInput]=useState('');
  const [imgaeurl , SetImageurl]=useState("")

  
const handleSubmit=(e)=>{

  e.preventDefault();
  db.collection("posts").add({
    message:input,
    timestamp:firebase.firestore.FieldValue.
    serverTimestamp(),
    profilepic:user.photoURL,
    username:user.displayName,
    image:imgaeurl,



  })
  SetInput("");
  SetImageurl("");
}


  return (
    <div className='MessageSender'>
      <div className='message-top'>
        <Avatar src={user.photoURL}/>
        <form>
        <input value={input} className="message-input" placeholder={`what's on your mind , ${user.displayName}`}
        onChange={(e)=>SetInput(e.target.value)}/>
        <input value={imgaeurl} onChange={(e)=>SetImageurl(e.target.value)}   placeholder='Image url /option'/>
        <button onClick={handleSubmit} type="submit">
          Hidden submit
        </button>
        </form>
      </div>
      <div className='message-bottom'>
        <div className='message-option'>
          <VideocamIcon style={{color:'red'}} />
          <h3>Live Video</h3>
        </div>
        <div className='message-option'>
          <PhotoLibaryIcon style={{color:'green'}} />
          <h3>Photo/Video</h3>
        </div>
        <div className='message-option'>
          <InsertEmoticonIcon style={{color:'orange'}} />
          <h3>Feeling/Activity</h3>
        </div>
        
        
      </div>
      
    </div>
  )
}

export default MessageSender