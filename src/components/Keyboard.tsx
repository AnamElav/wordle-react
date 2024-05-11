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
  correctLetters: string[];
  incorrectLetters: string[];
  addGuessedLetter: (letter: string) => void;
}

function Keyboard({
  correctLetters,
  incorrectLetters,
  addGuessedLetter,
}: KeyboardProps) {
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
        const isRight = correctLetters.includes(key);
        const isWrong = incorrectLetters.includes(key);
        return (
          <button
            className={`btn ${isRight ? "right" : ""} ${
              isWrong ? "wrong" : ""
            }`}
            onClick={() => addGuessedLetter(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;

// <div className="square">{ letter }</div>
