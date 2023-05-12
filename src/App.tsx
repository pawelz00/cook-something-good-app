import {BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from './pages/Categories';
import RecipesAZ from './pages/RecipesAZ';
import RecipesAZList from './pages/RecipesAZList';
import Layout from './components/Layout';
import CategoriesRecipesList from './pages/CategoriesRecipesList';
import RandomRecipe from './pages/RandomRecipe';
import SingleRecipe from './pages/SingleRecipe';
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/recipes" element={<RecipesAZ/>}/>
          <Route path="/recipes/:letter" element={<RecipesAZList/>}/>
          <Route path="/recipes/:letter/:id" element={<SingleRecipe/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/categories/:category" element={<CategoriesRecipesList/>}/>
          <Route path="/categories/:category/:id" element={<SingleRecipe/>}/>
          <Route path="/random" element={<RandomRecipe/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
