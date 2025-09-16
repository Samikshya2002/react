import { useReducer } from "react";

function Reducer(state,action){
    switch(action.type){
        case 'increment':{
            return{
                count:state.count+1
            }
        }
        case 'decrement':{
            return{
                count:state.count-1
            }
        }
        case 'reset':{
            return{
                count:0
            }
        }
    }
}
const initialState = {count:0};

export default function CounterApp(){
    const[state,dispatch]=useReducer(Reducer,initialState);
    return(
        <>
            <div style={{width: "100vw", height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div style={{padding:"2rem",border: "2px solid #333",borderRadius: "12px",textAlign: "center",boxShadow: "0 4px 10px rgba(0,0,0,0.2)"}}>
                    <h1>Counter App</h1>
                <p>Count:{state.count}</p>
                <button onClick={()=>dispatch({type:"decrement"})}>-</button>
                <button onClick={()=>dispatch({type:"increment"})}>+</button>
                <br />
                <button onClick={()=>dispatch({type:"reset"})}>reset</button>
                </div>                
            </div>
        </>
    )
}