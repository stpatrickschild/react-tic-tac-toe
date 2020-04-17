import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';



const generateSquareComponents = (squares, onClickCallback) => {
  // 
  let squareComponents = [];

  for (let row = 0; row < squares.length; row += 1) {
    // console.log(squares[row]);
   
    for (let i = 0; i < squares.length; i += 1){
      squareComponents.push(<Square id={squares[row][i].id} value={squares[row][i].value}/>);
      // let squareJson = squares[row][i]
      // console.log(squareJson.id, squareJson.value);
    }
    
  }
  // Complete this for Wave 1
return squareComponents;
  

 
}

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  console.log(squareList);
  return <div className="grid" >
    {squareList}
  </div>
}

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
