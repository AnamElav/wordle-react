import { useState, useCallback } from "react";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
import words from "./wordList.json";

const WORDLIST = words.filter((word) => word.length === 5);

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return WORDLIST[Math.floor(Math.random() * WORDLIST.length)];
  });

  const [currentGuess, setCurrentGuess] = useState<string[]>([]);

  // const correctLetters = guessedLetters.filter((letter) =>
  //   wordToGuess.includes(letter)
  // );

  // const incorrectLetters = guessedLetters.filter(
  //   (letter) => !wordToGuess.includes(letter)
  // );

  const [numGuesses, setNumGuesses] = useState(0);

  // const addGuessedLetter = useCallback(
  //   (letter: string) => {
  //     if (currentGuess.includes(letter)) {
  //       return;
  //     }
  //     setCurrentGuess((currentLetters) => [...currentLetters, letter]);
  //   },
  //   [guessedLetters]
  // );

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
          wordToGuess={wordToGuess}
          currentGuess={currentGuess}
          setCurrentGuess={setCurrentGuess}
        />
      </div>
    </div>
  );
}

export default App;
