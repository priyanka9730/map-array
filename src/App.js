import { useState } from "react";
import "./styles.css";

export default function App() {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="App">
      {arr.map((a) => {
        return <div>{a}</div>;
      })}
    </div>
  );
}
