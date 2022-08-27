import React, { useState } from 'react';
import "./TicTacToe.css";

let defaultstate = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
let a;


const TicTacToe = () => {
  const [btnValue, setbtnValue] = useState(defaultstate);
  const [clickValue, setclickValue] = useState(true);
  const [result, setresult] = useState('');
  const [count, setcount] = useState(1)

  const i = (index) => {
    a = document.getElementsByClassName('ticbtn');
    let str = btnValue;
    str[index] = clickValue ? 'X' : 'O';
    setbtnValue(str);
    setclickValue(!clickValue); /* For false value */
    if (str[index] == 'X' ) {
      a[index].style.color = "red";
    }
    setcount(count + 1);
    var [a, b, c, d, e, f, g, h, i] = btnValue;
    test(a, b, c, d, e, f, g, h, i)
  }

  function test(a, b, c, d, e, f, g, h, i) {
    if (
      (a == 'X' && b == 'X' && c == 'X') ||
      (d == 'X' && e == 'X' && f == 'X') ||
      (g == 'X' && h == 'X' && i == 'X') ||
      (a == 'X' && d == 'X' && g == 'X') ||
      (b == 'X' && e == 'X' && h == 'X') ||
      (c == 'X' && f == 'X' && i == 'X') ||
      (a == 'X' && e == 'X' && i == 'X') ||
      (c == 'X' && e == 'X' && g == 'X')) {
      setresult('X Player Win');
    }
    else if (
      (a == 'O' && b == 'O' && c == 'O') ||
      (d == 'O' && e == 'O' && f == 'O') ||
      (g == 'O' && h == 'O' && i == 'O') ||
      (a == 'O' && d == 'O' && g == 'O') ||
      (b == 'O' && e == 'O' && h == 'O') ||
      (c == 'O' && f == 'O' && i == 'O') ||
      (a == 'O' && e == 'O' && i == 'O') ||
      (c == 'O' && e == 'O' && g == 'O')) {
      setresult('O Player Win');
    }
    else if (count === 9) {
      setresult('Draw');
    }
  }

  return (
    <>
      <div className="container">
        <div className="bg-image text-center">
          <div className="flex">
            <div className="row  mt-2">
              <div className="item pt-4">
                <input type="button" id="ticbtn-1" onClick={() => i(0)} value={btnValue[0]} className="ticbtn" />
                <input type="button" id="ticbtn-2" onClick={() => i(1)} value={btnValue[1]} className="ticbtn" />
                <input type="button" id="ticbtn-3" onClick={() => i(2)} value={btnValue[2]} className="ticbtn" />
                <br />
                <input type="button" id="ticbtn-4" onClick={() => i(3)} value={btnValue[3]} className="ticbtn" />
                <input type="button" id="ticbtn-5" onClick={() => i(4)} value={btnValue[4]} className="ticbtn" />
                <input type="button" id="ticbtn-6" onClick={() => i(5)} value={btnValue[5]} className="ticbtn" />
                <br />
                <input type="button" id="ticbtn-7" onClick={() => i(6)} value={btnValue[6]} className="ticbtn" />
                <input type="button" id="ticbtn-8" onClick={() => i(7)} value={btnValue[7]} className="ticbtn" />
                <input type="button" id="ticbtn-9" onClick={() => i(8)} value={btnValue[8]} className="ticbtn" />
                <br />
                <h1 className='mt-3'>{result}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TicTacToe;
