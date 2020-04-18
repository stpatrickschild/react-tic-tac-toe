import React, { useState } from 'react'
import './App.css'
import Board from './components/Board'

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
  const [squares, setSquares] = useState(generateSquares()); //
  const [turn, setTurn] = useState(PLAYER_1);

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

  const checkForWinner = () => {
    // Complete in Wave 3
  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={ChangeSquareValue} />
      </main>
    </div>
  )
}

export default App
