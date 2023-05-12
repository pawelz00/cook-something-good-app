import React from 'react';
import RecipeLetterTile from '../components/RecipeLetterTile';
import { Link } from 'react-router-dom';

const RecipesAZ = () : JSX.Element => {

  
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  const alphabetElements = alphabet.map(letter => {
    return (
    <Link key={letter} to={`/recipes/${letter.toLowerCase()}`}>
      <RecipeLetterTile letter={letter}/>
    </Link>
    );
  })

  return (
    <main className='container'>
    <div className='recipes-az-container'>
        {alphabetElements}
    </div>
    </main>
  );
}

export default RecipesAZ;