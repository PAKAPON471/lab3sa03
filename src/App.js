import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";
function App() {
  return (
    <body>
      <div className='wrapper'>
        <h1>
          Guess the Word
          <div className='content'>
            <WordCard value={word}/>
          </div>
        </h1>
      </div>
    </body>
  );
}

export default App;
