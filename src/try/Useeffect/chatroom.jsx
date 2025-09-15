import { useState, useEffect } from "react";
import { createConnection } from "./chat";

function ChatRoom({roomId}){
    const[serverUrl, setServerUrl] = useState('https://localhost:1234');
    useEffect(() =>{
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return()=>{
            connection.disconnect();
        }
    },[serverUrl, roomId])
    return(
        <>
        <label>
            ServerUrl{''}
            <input value={serverUrl}
            onChange={e=> setServerUrl(e.target.value)} />
        </label>
        <label>
            <h1>Welcome to {roomId} room</h1>
        </label>
        </>
    )
}

export default function Chat(){
    const [roomId, setRoomId] = useState('general');
    const[show, setShow] = useState(false);
    return(
        <>
        <label>Choose the chat room:{''}
            <select value={roomId} onChange={e => setRoomId(e.target.value)}>
                <option value="general">general</option>
                <option value="travel">travel</option>
                <option value="music">music</option>
            </select>
        </label>
        <button onClick={()=> setShow(!show)}>
            {show? 'Close chat':'Open chat'}
        </button>
        {show && <h1/>}
        {show && <ChatRoom roomId={roomId}/>}
        </>
    )
}