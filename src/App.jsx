import { useSelector,useDispatch } from "react-redux";
import {increment,decrement}from "./counterSlice"

function App(){
  
const count=useSelector((state)=>state.counter.count)
const dispatch=useDispatch()

return(
  <div>
<h1>counter:{count}</h1>
<button onClick={()=>dispatch(increment(5))}>increment</button>
<button onClick={()=>dispatch(decrement(2))}>decrement</button>
  </div>
)
}
export default App;