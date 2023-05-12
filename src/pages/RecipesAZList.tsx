import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ListOfMeals } from '../types/Meals';
import ApiService from '../services/ApiService';
import RecipeTile from '../components/RecipeTile';

const RecipesAZList = () : JSX.Element => {

  const params = useParams();

  const [meals, setMeals] = useState<ListOfMeals>();
  const [search, setSearch] = useState('');
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

  const mealsList = meals && meals.meals ? meals.meals.filter((meal) => {
    return search.toLowerCase() === '' ? meal : meal.strMeal.toLowerCase().includes(search);
  }).map((meal) => {
    return (
      <Link to={`${meal.idMeal}`} key={meal.idMeal}>
        <RecipeTile name={meal.strMeal} img={meal.strMealThumb} />
      </Link>
    );
  }) : null;

  return (
    <main className='container'>
    <Link relative="path" to="..">&larr; <span>Back</span></Link>
    <input className='search-input' onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Search...'/>
    <div className='recipes-az-list-container'>
        {mealsList}
    </div>
    </main>
  );
}

export default RecipesAZList;