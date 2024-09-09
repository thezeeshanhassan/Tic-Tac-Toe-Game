import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function onSelectPlayer() {
    if (activePlayer === "X") setActivePlayer(() => "O");
    else setActivePlayer(() => "X");
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={"Player 1"}
            symbol={"X"}
            isActive={activePlayer === "X"}
          ></Player>
          <Player
            name={"Player 2"}
            symbol={"O"}
            isActive={activePlayer === "O"}
          ></Player>
        </ol>
        <GameBoard
          onSelectSquare={onSelectPlayer}
          activePlayerSymbol={activePlayer}
        ></GameBoard>
      </div>
    </main>
  );
}

export default App;
