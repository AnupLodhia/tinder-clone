import React from "react";
import "./Chat.css";
import Avatar from "@material-ui/core/Avatar";
import userimage from "./images/profile.jpg";

function Profile({ username, email }) {
  return (
    <div className="chat">
      <Avatar className="chat__image" alt="" src={userimage} />
      <div className="chat__details">
        <h2>{username}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Profile;
