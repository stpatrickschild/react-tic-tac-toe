import React, { useState } from 'react'
import './App.css'
import Board from './components/Board'
import { createPortal } from 'react-dom'

const PLAYER_1 = 'X'
const PLAYER_2 = 'O'

const generateSquares = () => {
  const squares = []

  let currentId = 0

  for (let row = 0; row < 3; row += 1) {
    squares.push([])
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: ''
      })
      currentId += 1
    }
  }

  return squares
}

const App = () => {
  const [squares, setSquares] = useState(generateSquares()); 
  const [turn, setTurn] = useState(PLAYER_1);
  const [winner, setWinner] = useState('');

  //const

  // Wave 2
  // You will need to create a method to change the square
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  const ChangeSquareValue = square => {
    let newSquares = [];

    for (let row = 0; row < squares.length; row++) {
      newSquares.push([]);
      for (let col = 0; col < squares.length; col++) {
        if (squares[row][col].id === square && squares[row][col].value === "") {
          newSquares[row].push({
            id: squares[row][col].id,
            value: turn
          })

          if(turn === PLAYER_1) {
            setTurn(PLAYER_2)
          } else {
            setTurn(PLAYER_1)
          }
        } else {
          newSquares[row].push(squares[row][col]);
        }
      }
    }
    setSquares(newSquares)
  }
 
    //complete in wave 3
  
  const checkRow = (turn) => {
    for (let row = 0; row < 3; row++) {
     if ((squares[row][0].value === turn) &&
          (squares[row][1].value === turn) &&
          (squares[row][2].value === turn)){
            return true;
          }    
    }
    return false;
  }
  const checkCol = (turn) => {
    for (let col = 0; col < 3; col++) {
     if ((squares[0][col].value === turn) &&
          (squares[1][col].value === turn) &&
          (squares[2][col].value === turn)){
            return true;
          }    
    }
    return false;
  }
  
  const checkDiagonal = (turn) => {
    if ((squares[0][0].value === turn) &&
          (squares[1][1].value === turn) &&
          (squares[2][2].value === turn)) {
            return true;
          } 
    if ((squares[0][2].value === turn) &&
      (squares[1][1].value === turn) &&
          (squares[2][0].value === turn)){
            return true;
          } 
      return false;
  }
  const checkForWinner = (turn) => {
    if (checkRow(turn) || checkCol(turn) || checkDiagonal(turn)) {
      setWinner(turn)
    }
  }
  

  const resetGame = () => {
   setSquares(generateSquares());
   setWinner('');

    // Complete in Wave 4
  }
  if (winner === ''){
    checkForWinner('X')
    checkForWinner('O')
  };
  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is {winner} </h2>
        <button onClick={resetGame}>Rest Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={ChangeSquareValue} />
      </main>
    </div>
  )
}

export default App
