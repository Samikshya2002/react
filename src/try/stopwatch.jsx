import { useState,useRef } from "react";

export default function Stopwatch(){
    const[startTime,setstartTime] = useState(null);
    const[now,setNow]= useState(null);
    const intervalRef = useRef(null);

    function handleStart(){
        setstartTime(Date.now())
        setNow(Date.now());

        clearInterval(intervalRef.current);//old interval is stopped
        intervalRef.current = setInterval(()=>{
            setNow(Date.now());
        },10);
    }
    function handleStop(){
        clearInterval(intervalRef.current);
    }
    function handleReset(){
        setstartTime(null);
        setNow(null);
    }
    let secondsPassed=0;
    if(startTime !=null && now !=null){
        secondsPassed=(now-startTime)/1000;
    }
    return(
        <>
        <h1>Time Passed:{secondsPassed}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
        </>
    )
}