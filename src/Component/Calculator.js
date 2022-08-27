import React, { useState } from "react";
import "./Calculator.css";
let displayVal;
let displayVal2;
let backspaceVal;
let newPercentValue;

const Calculator = () => {
  const [display, setdisplay] = useState("");
  const [count, setcount] = useState("");

  const clear = () => {
    setdisplay("");
  };

  const plus = () => {
    displayVal = display;
    setdisplay("");
    setcount(1);
  };
  const minus = () => {
    displayVal = display;
    setdisplay("");
    setcount(2);
  };
  const multi = () => {
    displayVal = display;
    setdisplay("");
    setcount(3);
  };
  const divided = () => {
    displayVal = display;
    setdisplay("");
    setcount(4);
  };
  const erase = () => {
    let displayLength = display.length;
    backspaceVal = display.slice(0, displayLength - 1);
    setdisplay(backspaceVal);
  };
  const percentage = () => {
    displayVal2 = display;
    newPercentValue = (parseFloat(displayVal) / 100) * parseFloat(displayVal2);
    setcount(5);
    setdisplay(newPercentValue);
  };

  const eqaulto = () => {
    let sum, less, into, div;
    displayVal2 = display;
    if (count === 1) {
      sum = parseFloat(displayVal) + parseFloat(displayVal2);
      setdisplay(sum);
    } else if (count === 2) {
      less = parseFloat(displayVal) - parseFloat(displayVal2);
      setdisplay(less);
    } else if (count === 3) {
      into = parseFloat(displayVal) * parseFloat(displayVal2);
      setdisplay(into);
    } else if (count === 4) {
      div = parseFloat(displayVal) / parseFloat(displayVal2);
      setdisplay(div);
    } else {
      setdisplay("0");
      console.log(display);
    }
  };
  return (
    <>
      <div className="container py-5">
        <div className="text-center pt-5 pb-3">
          <input
            type="text"
            id="display"
            value={display}
            maxLength={15}
            readOnly
          />
        </div>
        <div id="keyPad" className="text-center">
          <div className="row justify-content-center">
            <button
              type="button"
              className="mybtn"
              onClick={clear}
              value={display}
            >
              AC
            </button>
            <button
              type="button"
              className="mybtn"
              onClick={percentage}
              value=""
            >
              %
            </button>
            <button type="button" className="mybtn" onClick={divided} value="/">
              /
            </button>
            <button type="button" className="mybtn" onClick={erase} value="">
              &lArr;
            </button>
          </div>
          <div className="row justify-content-center">
            <button
              type="button"
              className="mybtn"
              onClick={(e) => setdisplay(display + e.target.value)}
              value="7"
            >
              7
            </button>
            <button
              type="button"
              className="mybtn"
              onClick={(e) => setdisplay(display + e.target.value)}
              value="8"
            >
              8
            </button>
            <button
              type="button"
              className="mybtn"
              onClick={(e) => setdisplay(display + e.target.value)}
              value="9"
            >
              9
            </button>
            <button type="button" className="mybtn" onClick={multi} value="X">
              X
            </button>
          </div>
          <div className="row justify-content-center">
            <button
              type="button"
              className="mybtn"
              onClick={(e) => setdisplay(display + e.target.value)}
              value="4"
            >
              4
            </button>
            <button
              type="button"
              className="mybtn"
              onClick={(e) => setdisplay(display + e.target.value)}
              value="5"
            >
              5
            </button>
            <button
              type="button"
              className="mybtn"
              onClick={(e) => setdisplay(display + e.target.value)}
              value="6"
            >
              6
            </button>
            <button type="button" className="mybtn" onClick={minus} value="-">
              -
            </button>
          </div>
          <div className="row justify-content-center">
            <button
              type="button"
              className="mybtn"
              onClick={(e) => setdisplay(display + e.target.value)}
              value="1"
            >
              1
            </button>
            <button
              type="button"
              className="mybtn"
              onClick={(e) => setdisplay(display + e.target.value)}
              value="2"
            >
              2
            </button>
            <button
              type="button"
              className="mybtn"
              onClick={(e) => setdisplay(display + e.target.value)}
              value="3"
            >
              3
            </button>
            <button type="button" className="mybtn" onClick={plus} value="+">
              +
            </button>
          </div>
          <div className="row justify-content-center">
            <button
              type="button"
              className="mybtn"
              onClick={(e) => setdisplay(display + e.target.value)}
              value="0"
            >
              0
            </button>
            <button
              type="button"
              className="mybtn"
              onClick={(e) => setdisplay(display + e.target.value)}
              value="00"
            >
              00
            </button>
            <button
              type="button"
              className="mybtn"
              onClick={(e) => setdisplay(display + e.target.value)}
              value="."
            >
              .
            </button>
            <button type="button" className="mybtn" onClick={eqaulto} value="">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;