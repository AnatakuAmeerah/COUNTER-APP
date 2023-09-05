import { useState } from "react";
import "./App.css";
import { ChevronsDown } from "react-feather";
import { ChevronDown } from "react-feather";
import { ChevronUp } from "react-feather";
import { ChevronsUp } from "react-feather";
import { RotateCcw } from "react-feather";
import { Hash } from "react-feather";


function App() {
  const [count, setCount] = useState(0);

  //  increase count by 1
  const incByOne = (event) => {
    event.preventDefault();
    setCount((prev) => prev + 1);
  };

  // increase count by 10
  const incByTen = (event) => {
    event.preventDefault();
    setCount((prev) => prev + 10);
  };

  // reset to 0
  const toZero = (event) => {
    event.preventDefault();
    setCount(0);
  };
  // set count to a random no btw 1 and 100
  const randomNo = (event) => {
    event.preventDefault();
    setCount(Math.floor(Math.random() * 100) + 1);
  }
  // decrease count by 10
  const decByTen = (event) => {
    event.preventDefault();
    setCount((prev) => prev - 10);
  };
  // decrease count by 1
  const decByOne = (event) => {
    event.preventDefault();
    setCount((prev) => prev - 1);
  };

  return (
    <section className="body">
    
      <section className="counterbox">
        <p>Current value:</p>
        <div className="count">{count} </div>
        <div className="counterbutton">
        <button onClick={incByOne}>
          {" "}
          <ChevronUp />{" "}
        </button>
        <button onClick={incByTen}>
          {" "}
          <ChevronsUp />{" "}
        </button>
        <button onClick={toZero}>
          {" "}
          <RotateCcw />{" "}
        </button>
        <button onClick={randomNo}>
          {" "}
          <Hash />{" "}
        </button>
        <button onClick={decByTen}>
          {" "}
          <ChevronsDown />{" "}
        </button>
        <button onClick={decByOne}>
          {" "}
          <ChevronDown />{" "}
        </button>
        </div>
      </section>
    </section>
  );
}

export default App;
