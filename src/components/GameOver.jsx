import React from "react";

const GameOver = ({ winner, newGame }) => {
  return (
    <div id="game-over">
      <h2>Game Over! </h2>
      {!winner ? <p>It's a draw!</p> : <p>{winner} won!</p>}
      <p>
        <button onClick={newGame}>New Game</button>
      </p>
    </div>
  );
};

export default GameOver;
