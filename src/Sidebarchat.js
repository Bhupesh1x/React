import React from 'react'
import { Avatar } from "@material-ui/core";
import "./Sidebarchat.css";
function Sidebarchat({addnewChat}) {
    // const [seed,setSeed] = useState("");
    
   const createChat = () => {
    const roomName= prompt(" Please enter the name of room");
    if(roomName) {

    }
   }; 
    
    
    return !addnewChat ?(
        <div className="sidebar_chat">
            <Avatar/>
            <div className="sidebarchat_info">
              <h2>Room Name</h2>        
                <p>Last Message...</p>
            </div>
        </div>
    ) : (
       <div onClick={createChat} className="sidebarchat">
        <h2>Add new Chat</h2>  
       </div>
    );
}

export default Sidebarchat
