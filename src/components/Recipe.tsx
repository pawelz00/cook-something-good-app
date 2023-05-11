import { Meal } from '../types/Meals';

interface RecipeProps {
    recipe: Meal | undefined;
}

const Recipe: React.FC<RecipeProps> = (props) => {

    const { recipe } = props;

    return (
        <main className='container recipe-container'>
            <article>
                <img alt="Loading..." className="recipe-img" src={recipe?.strMealThumb}/>
                <h2>{recipe?.strMeal}</h2>
                <h6>Category: {recipe?.strCategory}</h6>
                <h6>Area: {recipe?.strArea}</h6>
                <p>{recipe?.strInstructions}</p>
                <span>YouTube instructions: <a target="_blank" href={recipe?.strYoutube}>Click me!</a></span>
            </article>
        </main>
    )
};


export default Recipe;