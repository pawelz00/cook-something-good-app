import React from 'react';
import RecipeLetter from '../components/RecipeLetter';
import { Link } from 'react-router-dom';

function RecipesAZ() {

  
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  const alphabetElements = alphabet.map(letter => {
    return <Link to={`/recipes/${letter.toLowerCase()}`}><RecipeLetter key={letter} letter={letter}/></Link>
  })

  return (
    <main className='container'>
    <div className='parent'>
        {alphabetElements}
    </div>
    </main>
  );
}

export default RecipesAZ;