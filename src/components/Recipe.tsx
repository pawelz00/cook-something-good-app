import { Meal } from '../types/Meals';

interface RecipeProps {
    recipe: Meal | undefined;
}

const Recipe: React.FC<RecipeProps> = (props) => {

    const { recipe } = props;

    return (
        <main className='container recipe-container'>
            <article>
                <header>
                    <h2>{recipe?.strMeal}</h2>
                    <h6>Category: {recipe?.strCategory}, Area: {recipe?.strArea}</h6>
                    <img alt={recipe?.strMeal} className="recipe-img" src={recipe?.strMealThumb}/>
                </header>
                    <p>Ingredients:
                        <p>
                        <span>{recipe?.strIngredient1 ?? `${recipe?.strIngredient1}`} </span>    
                        <span>{recipe?.strMeasure1 ?? `${recipe?.strIngredient1} `} </span>    
                        <span>{recipe?.strIngredient2 ?? `${recipe?.strIngredient2} `} </span>    
                        <span>{recipe?.strMeasure2 ?? `${recipe?.strMeasure2} `} </span>    
                        <span>{recipe?.strIngredient3 ?? `${recipe?.strIngredient3} `} </span> 
                        <span>{recipe?.strMeasure3 ?? `${recipe?.strMeasure3} `} </span>       
                        <span>{recipe?.strIngredient4 ?? `${recipe?.strIngredient4} `} </span> 
                        <span>{recipe?.strMeasure4 ?? `${recipe?.strMeasure4} `} </span>      
                        <span>{recipe?.strIngredient5 ?? `${recipe?.strIngredient5} `} </span> 
                        <span>{recipe?.strMeasure5 ?? `${recipe?.strMeasure5} `} </span>       
                        <span>{recipe?.strIngredient6 ?? `${recipe?.strIngredient6} `} </span>
                        <span>{recipe?.strMeasure6 ?? `${recipe?.strMeasure6} `} </span>    
                        <span>{recipe?.strIngredient7 ?? `${recipe?.strIngredient7} `} </span> 
                        <span>{recipe?.strMeasure7 ?? `${recipe?.strMeasure7} `} </span>       
                        <span>{recipe?.strIngredient8 ?? `${recipe?.strIngredient8} `} </span> 
                        <span>{recipe?.strMeasure8 ?? `${recipe?.strMeasure8} `} </span>       
                        <span>{recipe?.strIngredient9 ?? `${recipe?.strIngredient9} `} </span> 
                        <span>{recipe?.strMeasure9 ?? `${recipe?.strMeasure9} `} </span>       
                        <span>{recipe?.strIngredient10 ?? `${recipe?.strIngredient10} `} </span>
                        <span>{recipe?.strMeasure10 ?? `${recipe?.strMeasure10} `} </span>       
                        <span>{recipe?.strIngredient11 ?? `${recipe?.strIngredient11} `} </span>
                        <span>{recipe?.strMeasure11 ?? `${recipe?.strMeasure11} `} </span>        
                        <span>{recipe?.strIngredient12 ?? `${recipe?.strIngredient12} `} </span>
                        <span>{recipe?.strMeasure12 ?? `${recipe?.strMeasure12} `} </span>    
                        <span>{recipe?.strIngredient13 ?? `${recipe?.strIngredient13} `} </span>
                        <span>{recipe?.strMeasure13 ?? `${recipe?.strMeasure13} `} </span>       
                        <span>{recipe?.strIngredient14 ?? `${recipe?.strIngredient14} `} </span>
                        <span>{recipe?.strMeasure14 ?? `${recipe?.strMeasure14} `} </span>        
                        <span>{recipe?.strIngredient15 ?? `${recipe?.strIngredient15} `} </span>
                        <span>{recipe?.strMeasure15 ?? `${recipe?.strMeasure15} `} </span>    
                        <span>{recipe?.strIngredient16 ?? `${recipe?.strIngredient16} `} </span>
                        <span>{recipe?.strMeasure16 ?? `${recipe?.strMeasure16} `} </span>       
                        <span>{recipe?.strIngredient17 ?? `${recipe?.strIngredient17} `} </span>
                        <span>{recipe?.strMeasure17 ?? `${recipe?.strMeasure17} `} </span>        
                        <span>{recipe?.strIngredient18 ?? `${recipe?.strIngredient18} `} </span>
                        <span>{recipe?.strMeasure18 ?? `${recipe?.strMeasure18} `} </span>    
                        <span>{recipe?.strIngredient19 ?? `${recipe?.strIngredient19} `} </span>
                        <span>{recipe?.strMeasure19 ?? `${recipe?.strMeasure19} `} </span>       
                        <span>{recipe?.strIngredient20 ?? `${recipe?.strIngredient20} `} </span>
                        <span>{recipe?.strMeasure20 ?? `${recipe?.strMeasure20} `} </span>         
                        </p>
                    </p>
                    <hr/>
                    <p>{recipe?.strInstructions}</p>
                <footer>
                    <span>YouTube instructions: <a target="_blank" href={recipe?.strYoutube}>Click me!</a></span>
                </footer>
            </article>
        </main>
    )
};


export default Recipe;