import React from 'react';

interface Letter {
    letter: string;
}

function RecipeLetterTile({letter}:Letter) {
  return (
    <div className='recipe-box'>
        <h1>{letter}</h1>
    </div>
  );
}

export default RecipeLetterTile;