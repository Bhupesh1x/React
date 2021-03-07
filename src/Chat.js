
import './Chat.css'
import { Avatar ,IconButton} from "@material-ui/core";
import MoreVerticon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import React , {useState} from "react";

function Chat() {
    const[input,setInput] = useState(""); 
    const sendMessage =  (e) =>{
       e.preventDefault();
       console.log("You Typed >>>", input);
       setInput("");
    }
    return (
        <div className="chat">
        <div className="chat_header">
            <Avatar/>
            <div className="chat_headerinfo">
                <h2>Room Name</h2>
                <p>Last Seen.....</p>
            </div>
            <div className="char_headerright">
            <IconButton>
                <SearchOutlinedIcon />
                </IconButton>
                <IconButton>
                <AttachFileIcon />
                </IconButton>
                <IconButton>
                <MoreVerticon />
                </IconButton>
            </div>
        </div>
        <div className="chat_body">
        <p className={`chatmessage ${true &&"chatreceiver"}`} >
            <span className="chatname" > Bhupesh Vyas</span>
            Hey Guys
            <span className="chattimestamp"> 9:52 pm</span>

            
            </p>
           
        </div>
        <div className="chat_footer">
            
                <InsertEmoticonIcon/>
              <form>  <input value={input} onChange={(e) => setInput(e.target.value)} type="text/>" />
              <button onClick={sendMessage}>Send Message</button>
               </form>

                <MicIcon/>
            
        </div>
    </div>

    )
}

export default Chat
