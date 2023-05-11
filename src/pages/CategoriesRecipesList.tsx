import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ListOfMeals } from '../types/Meals';
import ApiService from '../services/ApiService';
import RecipeTile from '../components/RecipeTile';

function CategoriesRecipesList() {

  const params = useParams();

  const [meals, setMeals] = useState<ListOfMeals>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    await ApiService.getMealsByCategory(params.category)
      .then((response: any) => {
        setMeals(response.data);
        setIsLoading(false);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const mealsList = meals && meals.meals ? meals.meals.map((meal) => {
    return (
      <Link to={`${meal.idMeal}`} key={meal.idMeal}>
        <RecipeTile name={meal.strMeal} img={meal.strMealThumb} />
      </Link>
    );
  }) : null;

  return (
    <main className='container'>
    <div className='recipes-az-list-container'>
      {mealsList}
    </div>
    </main>
  );
}

export default CategoriesRecipesList;