import React from 'react';

interface Letter {
    letter: string;
}

function RecipeLetter({letter}:Letter) {
  return (
    <div className='recipe-box'>
        <h1>{letter}</h1>
    </div>
  );
}

export default RecipeLetter;