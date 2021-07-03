import React from 'react';
import { useReducer } from 'react';
import CounterReducer from './counterReducer';
const Child2=()=>{
    const [state,dispatch] = useReducer(CounterReducer,0);  //0 iS THE DEFAULT VALUE OF REDUCER HERE
    return(
        <div>
            <h3>State value in reducer: {state} </h3>
            <button onClick={()=> dispatch("INCREMENT")}>increment</button>
            <button onClick={()=> dispatch('DECREMENT')}>Decrement</button>
            
        </div>
    );
}
export default Child2;