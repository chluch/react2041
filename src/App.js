import React, { useEffect, useState } from 'react';
import { moveLeft, moveRight, moveUp, moveDown } from './controls';
import './App.css';

function App() {

  // [current state, function to update the state]
  const [currentGrid, updateGrid] = useState(() => {
    // Only run once during initial render
    const initGrid = [
      [2, '', '', ''],
      ['', '', '', ''],
      ['', '', '', ''],
      ['', '', '', '']
    ];
    return initGrid;
  });

  // Game status
  const status = {
    win: 'You Win! :)',
    lose: 'You Lost ):',
    play: 'React 2048',
  }
  let [gameStatus, setGameStatus] = useState(status.play);

  // Random number generator
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.ceil(max));
  }

  // Find coordinates of empty squares
  const getEmptySquares = (grid) => {
    let empty = [];
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid.length; j++) {
        if (grid[i][j] === '') {
          empty.push([i, j]);
        }
      }
    }
    return empty;
  }

  // Generate a 2 or 4 in a random empty square 
  const generateNewSquares = (grid) => {
    let empty = getEmptySquares(grid);
    let randomNum = (getRandomInt(2) + 1) * 2;
    let randomCoord = empty[getRandomInt(empty.length)];
    grid[randomCoord[0]][randomCoord[1]] = randomNum;
    return grid;
  }

  // Check if squares slided; return type: Bool
  // This method is referenced from:
  // https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
  // Otherwise, we could loop both grids to compare
  const checkMoved = (prevGrid, currGrid) => {
    return (JSON.stringify(prevGrid) !== JSON.stringify(currGrid)) ? true : false;
  }

  // Check for 2048; return type: Bool
  const checkWin = (grid) => {
    return grid.some(row => row.includes(2048));
  }

  // Check if no moves left; return type: Bool
  const checkMovesLeft = (grid) => {
    let moves = [
      checkMoved(grid, moveLeft(grid)),
      checkMoved(grid, moveRight(grid)),
      checkMoved(grid, moveUp(grid)),
      checkMoved(grid, moveDown(grid))
    ];
    return moves.includes(true);
  }

  const move = (grid, direction) => {
    let newGrid = []
    if (direction === 'left') {
      newGrid = moveLeft(grid);
    }

    else if (direction === 'right') {
      newGrid = moveRight(grid);
    }

    else if (direction === 'up') {
      newGrid = moveUp(grid);
    }

    else if (direction === 'down') {
      newGrid = moveDown(grid);
    }

    if (checkMoved(grid, newGrid)) {
      if (checkWin(newGrid)) {
        setGameStatus(gameStatus = status.win);
      }
      else {
        newGrid = generateNewSquares(newGrid);
      }
    } else {
      if (!checkMovesLeft(newGrid)) {
        setGameStatus(gameStatus = status.lose);
      }
    }
    return newGrid;
  }

  const handleKeyDown = (e) => {
    const up = 38;
    const right = 39;
    const down = 40;
    const left = 37;

    e.preventDefault();
    if (e.keyCode === left) {
      console.log('left');
      updateGrid(move(currentGrid, 'left'));
    }
    else if (e.keyCode === up) {
      console.log('up');
      updateGrid(move(currentGrid, 'up'));
    }
    else if (e.keyCode === right) {
      console.log('right');
      updateGrid(move(currentGrid, 'right'));
    }
    else if (e.keyCode === down) {
      console.log('down');
      updateGrid(move(currentGrid, 'down'));
    }
  }


  useEffect(() => {
    window.onkeydown = handleKeyDown;
    // Clean up
    return () => {
      window.onkeydown = !handleKeyDown;
    }
  });

  useEffect(() => {
    if ((gameStatus === status.lose) || (gameStatus === status.win)) {
      window.onkeydown = !handleKeyDown;
    }
  });

  // TODO: There is probably a smarter way...
  // For CSS styling
  const squareClassMap = {
    2: 'two',
    4: 'four',
    8: 'eight',
    16: 'sixteen',
    32: 'thirty-two',
    64: 'sixty-four',
    128: 'one-two-eight',
    256: 'two-five-six',
    512: 'five-one-two',
    1024: 'one-o-two-four',
    2048: 'win',
  }

  // Render!
  return (
    <>
      <h1>{gameStatus}</h1>
      <div className="game">
        {
          currentGrid.map((row, index) => (
            <div key={`row${index}`} className={"row"}>
              {
                row.map((square, index) =>
                  <div key={`square${index}`} className={squareClassMap[square]}>
                    {square}
                  </div>)
              }
            </div>
          ))
        }
      </div>
    </>
  );
}

export default App;
