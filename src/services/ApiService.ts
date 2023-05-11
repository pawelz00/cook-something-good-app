import http from "../http-common"
import { Categories } from "../types/Categories";
import { ListOfMeals } from "../types/Meals"

const getSingleMeal = (id: any) => {
    return http.get<ListOfMeals>(`lookup.php?i=${id}`);
}

const getRandomMeal = () => {
    return http.get<ListOfMeals>('random.php');
}

const getMealsByCategory = (category : any) => {
    return http.get<ListOfMeals>(`filter.php?c=${category}`);
}

const getMealsByLetter = (letter: any) => {
    return http.get<ListOfMeals>(`search.php?f=${letter}`);
}

const getCategories = () => {
    return http.get<Categories>(`categories.php`);
}

const ApiService = {
    getSingleMeal,
    getRandomMeal,
    getMealsByCategory,
    getMealsByLetter,
    getCategories
}

export default ApiService;