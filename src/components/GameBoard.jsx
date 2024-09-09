import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelect(rowIdx, colIdx) {
    setGameBoard((prevGameBoard) => {
      const updatedArr = [...prevGameBoard.map(innerArr => [...innerArr])];
      updatedArr[rowIdx][colIdx] = activePlayerSymbol;
      return updatedArr;
    })
    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((PlayerSymbol, colIdx) => (
              <li key={colIdx}>
                <button onClick={() => handleSelect(rowIdx, colIdx)}>{PlayerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
