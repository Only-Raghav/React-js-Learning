import { useState } from 'react';
import './App.css';
import { useReducer } from 'react';

const init = 0;
const reducer = (state,action)=> {
  switch(action){
    case "increment":
      return state+1;
    case "decrement":
      return state-1;
    case "reset":
      return init;
    case "default":
      return state;
  }
}

function App() {

  // const[count,setCount] = useState(0);
  const[count,dispatch] = useReducer(reducer,init);



  function LikeHandler(){
    dispatch("increment")
  }

  function dislikeHandler(){
    dispatch("decrement")

  }

  function resetHandler(){
    dispatch("reset")
    

  }


  
return (
  <div>
    
    <div>{count}</div>
    <div>
      <button onClick={LikeHandler}>Like</button>

      <button onClick={dislikeHandler}>Dislike</button>
 
      <button onClick={resetHandler}>Reset</button>
    </div>

    
  </div>
)
}
export default App
