import React from 'react';

interface RecipeTile {
    name: string;
    img: string;
}

function RecipeTile({name, img}:RecipeTile) {
  return (
    <div className='recipe-az-list-box'>
        <img alt={name} src={img}></img>
        <h6>{name}</h6>
    </div>
  );
}

export default RecipeTile;