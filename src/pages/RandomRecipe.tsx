import React, { useEffect, useState } from 'react';
import { ListOfMeals} from '../types/Meals';
import ApiService from '../services/ApiService';
import Recipe from '../components/Recipe';

const RandomRecipe: React.FC = () => {

  const [recipe, setRecipe] = useState<ListOfMeals>();

  useEffect(() => {
    getRandomRecipe();
  }, []);

  const getRandomRecipe = () => {
    ApiService.getRandomMeal()
      .then((response: any) => {
        setRecipe(response.data);
        //console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  console.log(recipe);

  return(
    <Recipe recipe={recipe?.meals[0]}/>
  );
}

export default RandomRecipe;