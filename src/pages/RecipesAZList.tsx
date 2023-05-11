import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListOfMeals } from '../types/Meals';
import ApiService from '../services/ApiService';
import RecipeTile from '../components/RecipeTile';

function RecipesAZList() {

  const params = useParams();

  const [meals, setMeals] = useState<ListOfMeals>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRandomRecipe();
  }, []);

  const getRandomRecipe = async () => {
    await ApiService.getMealsByLetter(params.letter)
      .then((response: any) => {
        setMeals(response.data);
        setIsLoading(false);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const mealsList = meals?.meals.map((meal) => {
    return <RecipeTile name={meal.strMeal} img={meal.strMealThumb}></RecipeTile>
  });

  return (
    <main className='container'>
    <div className='recipes-az-list-container'>
        {mealsList}
    </div>
    </main>
  );
}

export default RecipesAZList;