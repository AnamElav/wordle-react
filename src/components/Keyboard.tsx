import { useState } from "react";

const KEYS = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "<=",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  "ret",
];

interface KeyboardProps {
  wordToGuess: string;
  currentGuess: string[];
}

function Keyboard({ wordToGuess, currentGuess }: KeyboardProps) {
  const [lockGuess, setLockGuess] = useState(false);

  const handleKeyPress = (key: string) => {
    if (!lockGuess && currentGuess.length < 5 && key != "ret" && key != "<=") {
      currentGuess = [...currentGuess, key];
      console.log(currentGuess);
    }
    if (key == "ret" && currentGuess.length === 5) {
      console.log("locked in");
      setLockGuess(true);
    }
    if (key == "<=" && currentGuess.length > 0) {
      currentGuess.pop();
      console.log(currentGuess);
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(70px, 1fr))",
        gap: ".3rem",
        marginTop: "20px",
      }}
    >
      {KEYS.map((key) => {
        const isCorrect =
          lockGuess &&
          currentGuess.some(
            (letter, index) => letter == key && wordToGuess[index] === key
          );
        const isInWord = lockGuess && wordToGuess.includes(key) && !isCorrect;
        const isWrong = lockGuess && !wordToGuess.includes(key);
        return (
          <button
            className={`btn ${isCorrect ? "correct" : ""} ${
              isInWord ? "inword" : ""
            } ${isWrong ? "wrong" : ""}`}
            onClick={() => handleKeyPress(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
