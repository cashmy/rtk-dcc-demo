import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { useSelector, useDispatch } from "react-redux";
// import { incremented } from "./features/counter/counterSlice";
import { Counter } from "./features/counter/Counter";

function App() {
  const count = 0;
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  function handleClick() {
    // dispatch(incremented());
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Hello dCC Class!</h3>
        <p>Let's Learn Redux Toolkit</p>

        <button type="button" onClick={handleClick}>
          Count is: {count}
        </button>
        {/* <Counter /> */}
      </header>
    </div>
  );
}

export default App;
