import { useState } from "react";
import "./App.css";
function App() {
  const [num, setNum] = useState(0);
  return (
    <>
      <h1>Счетчик косяков Завидеевой</h1>
      <h1>{num}</h1>
      <button
        onClick={() => {
          return setNum(num + 1);
        }}
      >
        Добавить косяк
      </button>
      <button
        onClick={() => {
          return setNum((prev) => {
            if (prev > 0) {
              return prev - 1;
            } else {
              return 0;
            }
          });
        }}
      >
        Минус косяк (это вряд ли...)
      </button>
    </>
  );
}

export default App;
