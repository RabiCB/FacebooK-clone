import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import SubscriptionOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import { Avatar, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStateValue } from './StateDataprovider'
function Header() {
const [{ user }, dispatch ]=useStateValue();
  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
          alt="logo"
        />
        <div className="header-input">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header-middle">
        <div className="header-option header-active">
          
          <HomeIcon fontSize="large" />
        </div>
        <div className="header-option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header-option">
          <SubscriptionOutlinedIcon fontSize="large" />
        </div>
        <div className="header-option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header-option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header-right">
        <div className="header-info">
          <Avatar src= {user.photoURL}/>
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
