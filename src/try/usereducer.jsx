import { useReducer } from "react";

function reducer(state,action){
    switch(action.type){
        case 'incremented_age':{
            return{
            name:state.name,
            age: state.age +1
        }
        }
        case 'changed_name':{
            return{
                name:action.nextName,
                age:state.age
            }
        }
    }
    throw Error('Unknown action: ' + action.type);
}
const initialState = {name:'Tay',age:19};



export default function Counter(){
    const[state,dispatch]=useReducer(reducer,initialState);
    function handleButton(){
        dispatch({type: 'incremented_age'});
    }
    function handleName(e){
        dispatch({
            type: 'changed_name',
            nextName : e.target.value
        });
    }
    return(
        <>
            <input value={state.name} onChange={handleName} />
            <br />
            <button onClick={handleButton}>Increment age</button>
            <p>Hello {state.name} you are {state.age}</p>
        </>
    )
}