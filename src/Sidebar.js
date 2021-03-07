import React,{useState , useEffect } from 'react'
import './Sidebar.css';
import { Avatar , IconButton} from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVerticon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Sidebarchat from  './Sidebarchat.js';
import db from "./Firebase"
function Sidebar() {
    const [rooms,setRooms] = useState([]);

    useEffect(() => {
       db.collection('rooms').onSnapshot(snapshot => (setRooms(snapshot.docs.map(doc =>({id:doc.id,data:doc.data(),}))))) 
       
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebar_header">
             <Avatar />      
            
            <div className="sidebar_headerright">
                <IconButton>
                <DonutLargeIcon />
                </IconButton>
                <IconButton>
                <ChatIcon />
                </IconButton>
                <IconButton>
                <MoreVerticon />
                </IconButton>
            </div> 
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                <SearchOutlinedIcon/>
                <input placeholder="Search Chat" type="text"></input>
                </div>
                </div>
            <div className="sidebarchat">
                <Sidebarchat addnewChat/>
                <Sidebarchat/>
                <Sidebarchat/>
                <Sidebarchat/>
                

                
            </div>
        </div>
    );
}


export default Sidebar