import Parent from "./parent";
import counterContext from "./CounterContext";
import { useState } from "react";

function App() { 
  let countState = useState(1);
  return ( //provider will like an umbrela for all the components with in it and value will be accessible also.//to get default value given
    //in usecontext we have to remove this provider
    
    <counterContext.Provider value={countState}>  
    <div >  
     <h1>ContextAPI</h1>
     <Parent />
    </div>
    </counterContext.Provider>
  );
}

export default App;
