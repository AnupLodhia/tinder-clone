import React from "react";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Jeff Bezos"
        message="What's Up"
        timestamp="40 seconds ago"
        profilePic="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg"
      />
      <Chat
        name="Mark Zuckerburg"
        message="What's Up"
        timestamp="40 seconds ago"
        profilePic="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg"
      />
      <Chat
        name="Bill Gates"
        message="What's Up"
        timestamp="40 seconds ago"
        profilePic="..."
      />
      <Chat
        name="Elon Musk"
        message="What's Up"
        timestamp="40 seconds ago"
        profilePic="https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg"
      />
    </div>
  );
}

export default Chats;
