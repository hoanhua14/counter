import './App.css';
import { useState } from 'react';




function App() {
  const [count, setCount] = useState(0);
  let newCount;
  const handleAdd = function() {
    newCount = count + 1;
    setCount(newCount);
  }

  const handleSubtract = function() {
    newCount = count - 1;
    setCount(newCount);
  };

  const handleReset = function() {
    setCount(0);
  }
  return (
    <div className="App">
      <div>{count}</div>
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubtract}>Subtract</button>
      </div>


    </div>
  );
}

export default App;
