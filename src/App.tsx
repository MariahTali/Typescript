import React from 'react';
import {useState} from 'react';
import words from "./wordList.json"
import './App.css';

function App() {
const [wordToGuess, setWordToGuess] = useState(() => {
  return words[Math.floor(Math.random() * words.length)]
});
const [guessedLetters, setGuessedLetters] = useState<string[]>([])

console.log(wordToGuess)
;
  return (
    <>
     <h1>Hello</h1>
  
    </>
     );
};
 
 

export default App;
