import React, { useState } from 'react'
import Avatar from "@material-ui/core/Avatar"
import "./ChatScreen.css"
import { useParams } from 'react-router'

function ChatScreen() {
    const {person}=useParams();
    const [input,setInput]=useState('');
    const [messages, setMessages] = useState([
        {
            name: "Elon",
            image: "https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg",
            message: "What's Up"
        },
        {
            name: "Elon",
            image: "https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg",
            message: "How are you?"
        },
        {
            message: "Hi there!"
        }
    ])

    const handleSend=e=>{
        e.preventDefault();
        setMessages([...messages,{message:input}]);
        setInput('');
    } 

    return (
        <div className="chatscreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH {person} on 11/04/2020</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar className="chatScreen__image" alt={person} src={person} />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )


            ))}
                <form className="chatScreen__input">
                    <input type="text" className="chatScreen__inputField"  value={input}  onChange={(e)=>setInput(e.target.value)} placeholder="Type a message"/>
                    <button type="submit" onClick={handleSend} className="chatScreen__send">SEND</button>
                </form>
            
        </div>
    )
}

export default ChatScreen
