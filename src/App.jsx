import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";

function App() {
  const [value, setValue] = useState(1);

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>

      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={() => dispatch(increment(value))}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement(value))}>
        Decrement
      </button>
    </div>
  );
}

export default App;