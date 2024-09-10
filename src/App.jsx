import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning_combinations";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivedActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [playerName, setPlayerName] = useState({
    X : "Player 1",
    O : "Player 2",
  });
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = derivedActivePlayer(gameTurns);
  let gameBoard = [...initialGameBoard.map(innerArr => [...innerArr])];;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = playerName[firstSquareSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIdx, colIdx) {
    setGameTurns((prevTurns) => {
      const currentPlayer = derivedActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIdx, col: colIdx }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerChangeName(symbol, newPlayername) {
    setPlayerName(prevNames => {
      return {
        ...prevNames,
        [symbol] : newPlayername
      }
    })
  }
 
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={"Player 1"}
            symbol={"X"}
            isActive={activePlayer === "X"}
            onChangeName = {handlePlayerChangeName}
          ></Player>
          <Player
            name={"Player 2"}
            symbol={"O"}
            isActive={activePlayer === "O"}
            onChangeName = {handlePlayerChangeName}
          ></Player>
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} handleRestart={handleRestart}></GameOver>
        )}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          gameBoard={gameBoard}
        ></GameBoard>
      </div>
      <Log turns={gameTurns}></Log>
    </main>
  );
}

export default App;
