import { useState } from "react"; 
import "./App.css";

function App(initialProps) {
  const [count, setCount] = useState(initialProps?? 0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1> Double is : {count * count}</h1>
      </div>
    </>
  );
}

export default App;
