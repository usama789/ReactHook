import React from 'react';
import counterContext from './CounterContext';
import { useContext } from 'react';
const Child =()=>{
     const contextValue = useContext(counterContext);
     console.log(contextValue);
    return (
    <div>
        <h3>This is from child</h3>
        <h4>Value is : {contextValue[0]}</h4>
        <button onClick={()=> {contextValue[1](++contextValue[0])}}>increment</button>
        <button onClick={()=> {contextValue[1](--contextValue[0])}}>decrement</button>
    </div>
    );
}
export default Child;