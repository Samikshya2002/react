import { useState } from "react";

export default function TrafficLight(){
    const [walk, setWalk] = useState(true);

    function handleClick(){
        setWalk(!walk);//toggle
    }
    return(
        <>
         <button onClick={handleClick}>
            Change to {walk?'Stop':'Walk'}
         </button>
         <h1 style={{color:walk?'darkgreen':'darkred'}}>{walk?'stop':'walk'}</h1>
        </>
    )
}

