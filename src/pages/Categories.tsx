import React, { useEffect, useState } from 'react';
import { CategoriesType } from '../types/Categories';
import ApiService from '../services/ApiService';
import RecipeLetter from '../components/RecipeLetterTile';
import CategoryTile from '../components/CategoryTile';
import { Link } from 'react-router-dom';

const Categories: React.FC = () => {

  const [categories, setCategories] = useState<CategoriesType>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    await ApiService.getCategories()
      .then((response: any) => {
        setCategories(response.data);
        setIsLoading(false);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const categoriesEl = categories?.categories.map((category) => {
    return <Link to={`/categories/${category.strCategory}`}><CategoryTile category={category.strCategory} img={category.strCategoryThumb}/></Link>
  });

  return (
    isLoading ? (
      <main className='container'>
        <article>
          <h1>Loading...</h1>
        </article>
      </main> )
    :
    <main className='container'>
    <div className='categories-container'>
        {categoriesEl}
    </div>
    </main>
  );
}

export default Categories;