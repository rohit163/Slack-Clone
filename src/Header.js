import { Avatar } from "@material-ui/core";
import { AccessTime } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import React from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";


function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        {/* Avatar for logged in user */}
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        {/* time icom */}
        <AccessTime />
      </div>
      <div className="header__search">
        {/* search icon */}
        <SearchIcon />
        <input type="text" placeholder="Search Rohit" />
        {/* input */}
      </div>
      <div className="header__right">
        {/* help Icon */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
