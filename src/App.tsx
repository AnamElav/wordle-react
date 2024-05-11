import { useState, useCallback } from "react";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
import words from "./wordList.json";

// need to pass numGuesses to grid; controls current row & what rows should be disabled
// correct letter and mid letter lists must be passed as props to grid component to update lists accordingly
// ^don't care about position of incorrect letters so don't need to pass, already handled in keyboard
// need to wait for enter key to be pressed before changing button colors

const WORDLIST = words.filter((word) => word.length === 5);

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return WORDLIST[Math.floor(Math.random() * WORDLIST.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const correctLetters = guessedLetters.filter((letter) =>
    wordToGuess.includes(letter)
  );

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const [numGuesses, setNumGuesses] = useState(0);

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) {
        return;
      }
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters]
  );

  console.log(wordToGuess);
  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <h1>Wordle</h1>
      <Grid numGuesses={numGuesses} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          correctLetters={correctLetters}
          incorrectLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
