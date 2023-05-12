import React from 'react';

interface RecipeTile {
    name: string;
    img: string;
}

const RecipeTile = ({name, img}:RecipeTile): JSX.Element => {
  return (
    <div className='recipe-az-list-box'>
        <img alt={name} src={img}></img>
        <h6>{name}</h6>
    </div>
  );
}

export default RecipeTile;