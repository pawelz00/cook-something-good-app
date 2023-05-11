import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipesAZList() {

  const params = useParams();

  return (
    <p>Hello from recipes list!</p>
  );
}

export default RecipesAZList;