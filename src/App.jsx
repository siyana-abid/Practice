import { useReducer} from "react";

function reducer(state,action){
  if (action.type==="increment"){
    return state+1;
  }
  if (action.type==="decrement"){
    return state-1;
  }
  return state;
}
function App(){
const[count,dispatch]=useReducer(reducer,0)
return(
  <div>
    <h2>{count}</h2>
    <button onClick={()=>dispatch({type:"increment"})}>increment</button>
    <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
  </div>
)
}
export default App;