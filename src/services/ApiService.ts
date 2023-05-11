import http from "../http-common"
import { ListOfMeals } from "../types/Meals"

const getSingleMeal = (id: any) => {
    return http.get<ListOfMeals>(`lookup.php?i=${id}`);
}

const getRandomMeal = () => {
    return http.get<ListOfMeals>('random.php');
}

const ApiService = {
    getSingleMeal,
    getRandomMeal
}

export default ApiService;