const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((col, colIdx) => (
              <li key={colIdx}>
                <button></button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
