import React, { useEffect, useState } from 'react';
import { ListOfMeals} from '../types/Meals';
import ApiService from '../services/ApiService';
import Recipe from '../components/Recipe';
import { useLoaderData } from 'react-router-dom';

const RandomRecipe = () : JSX.Element => {

  const [recipe, setRecipe] = useState<ListOfMeals>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRandomRecipe();
  }, []);

  const getRandomRecipe = async () => {
    await ApiService.getRandomMeal()
      .then((response: any) => {
        setRecipe(response.data);
        setIsLoading(false);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return(
      isLoading ? (
        <main className='container'>
          <article>
            <h1>Loading...</h1>
          </article>
        </main>
      ) : (
        <Recipe recipe={recipe?.meals[0]}/>
      )
  );
}

export default RandomRecipe;