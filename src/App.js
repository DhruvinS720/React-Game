import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css"
import Calculator from './Component/Calculator'
import TicTacToe from './Component/TicTacToe';
import Puzzle from './Component/Puzzle';

const App = () => {

  return (
    <>
      <div className='bg-dark p-3'>
        <Link to="/" className='text-white btn btn-outline-warning mx-2'>Calculator</Link>
        <Link to="tictactoe" className='text-white btn btn-outline-warning mx-2'>TicTacToe</Link>
        <Link to="puzzle" className='text-white btn btn-outline-warning mx-2'>Puzzle</Link>
      </div>
      <div className="">
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="tictactoe" element={<TicTacToe />} />
          <Route path="puzzle" element={<Puzzle />} />
        </Routes>
      </div>
    </>
  )
}

export default App

