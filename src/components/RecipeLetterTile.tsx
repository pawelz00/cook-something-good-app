import React from 'react';

interface Letter {
    letter: string;
}

const RecipeLetterTile = ({letter}:Letter) : JSX.Element =>{
  return (
    <div className='recipe-box'>
        <h1>{letter}</h1>
    </div>
  );
}

export default RecipeLetterTile;