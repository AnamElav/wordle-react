import { useState } from "react";

interface GridProps {
  numGuesses: number;
}

function Grid({ numGuesses }: GridProps) {
  const board = Array.from({ length: 6 }, (_, rowIndex) => (
    <div key={rowIndex} className="row">
      {Array.from({ length: 5 }, (_, colIndex) => (
        <div key={colIndex} className="square">
          {}
        </div>
      ))}
    </div>
  ));

  return <div className="board">{board}</div>;
}

export default Grid;
