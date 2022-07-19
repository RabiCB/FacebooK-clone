import React from 'react'
import {Avatar} from '@mui/material'
import './Post.css'
import {ThumbUp} from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { ChatBubbleOutline } from '@mui/icons-material';
import { NearMe } from '@mui/icons-material';
import { ExpandMoreOutlined } from '@mui/icons-material';

function Post ({profilepic ,image,username,timestamp,message}) {
  return (
    <div className="Post">
        <div className='post-top'>
            <Avatar src={profilepic}
            className="post-avatar"
            
            />
            <div className='post-topinfo'>
                <h3>{username}</h3>
                <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
        

        

        </div>

        <div className='post-bottom'>
            <p>{message}</p>
        </div>
        <div className='post-image'>
            <img src={image} alt="posted"/>
        </div>
        <div className="post-options">
            <div className='post-option'>
                <ThumbUp/>
                <p>Like</p>
            </div>
            <div className='post-option'>
                <ChatBubbleOutline/>
                <p>Comment</p>
            </div>

            <div className='post-option'>
                <NearMe/>
                <p>Share</p>
            </div>

            <div className='post-option'>
                <AccountCircleIcon/>
                <ExpandMoreOutlined/>
            </div>


        </div>

        
    </div>
  )
}

export default Post