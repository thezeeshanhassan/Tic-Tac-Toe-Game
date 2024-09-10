export default function GameOver({ winner }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{winner} You Won the Game!!!</p>
      <p>
        <button>Restart Game</button>
      </p>
    </div>
  );
}
