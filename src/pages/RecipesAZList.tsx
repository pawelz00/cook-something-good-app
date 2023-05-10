import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipesAZList() {

  const params = useParams();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${params.letter}`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <p>Hello from recipes list!</p>
  );
}

export default RecipesAZList;