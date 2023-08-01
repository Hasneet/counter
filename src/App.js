
import { useState } from 'react';
import './App.css';

// Component always return JSX

function App() {
  // return an array
  // [value, function to update the value]
  const state = useState(1);
  const counter = state[0];
  const setCounter = state[1];
  // this is React Node not HTML

  function increment() {
    setCounter(counter + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
    </div>
  );
}

export default App;
