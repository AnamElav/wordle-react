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
  setCurrentGuess: (guess: string[]) => void;
}

function Keyboard({
  wordToGuess,
  currentGuess,
  setCurrentGuess,
}: KeyboardProps) {
  const [lockGuess, setLockGuess] = useState(false);

  const handleKeyPress = (key: string) => {
    if (!lockGuess && currentGuess.length < 5 && key != "ret" && key != "<=") {
      setCurrentGuess([...currentGuess, key]);
    }
    if (key == "<=" && currentGuess.length > 0) {
      setCurrentGuess(currentGuess.slice(0, -1));
    }
    if (key == "ret" && currentGuess.length === 5) {
      setLockGuess(true);
      console.log("locked in");
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
        // Check if key is correctly placed
        const isCorrect =
          lockGuess &&
          currentGuess.some(
            (letter, index) => letter === key && wordToGuess[index] === key
          );
        // Check if key is in the word but misplaced
        const isInWord = lockGuess && wordToGuess.includes(key) && !isCorrect;
        // Check if key is not in the word
        const isWrong = lockGuess && !wordToGuess.includes(key);
        return (
          <button
            key={key}
            className={`btn ${
              isCorrect
                ? "correct"
                : isInWord
                ? "inword"
                : isWrong
                ? "wrong"
                : ""
            }`}
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
