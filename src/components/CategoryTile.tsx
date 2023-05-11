import React from 'react';

interface CategoryTile {
    category: string;
    img: string;
}

function CategoryTile({category, img}:CategoryTile) {
  return (
    <div className='category-box'>
        <img alt={category} src={img}/>
        <h1>{category}</h1>
    </div>
  );
}

export default CategoryTile;