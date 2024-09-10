export default function GameOver({ winner }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} You Won the Game!!!</p>}
      {!winner && <p>It's a Draw</p>}
      <p>
        <button>Restart Game</button>
      </p>
    </div>
  );
}
