import { useState } from "react";
import "./App.css";
function App() {
  const [num, setNum] = useState(0);
  return (
    <>
      <div>{num}</div>
      <button
        onClick={() => {
          return setNum(num + 1);
        }}
      >
        Click me!
      </button>
    </>
  );
}

export default App;
