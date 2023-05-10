import React from 'react';
import { Outlet, Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from './pages/Categories';
import Login from './pages/Login';
import RandomRecipe from './pages/Random-Recipe';
import RecipesAZ from './pages/RecipesAZ';
import RecipesAZList from './pages/RecipesAZList';


function App() {
  return (
    <BrowserRouter>
    <nav className="container">
      <ul>
        <li><strong>CookSomethingGood</strong></li>
        <li>
          <Link to={'/recipes'}>Recipes A-Z</Link>
        </li>
        <li>
          <Link to={'/categories'}>Categories</Link>
        </li>
        <li>
          <Link to={'/random'}>Random recipe!</Link>
        </li>
      </ul>
      <ul>
      <li>
          <Link to={'/'}>Logout</Link>
        </li>
      </ul>
    </nav>
      <Routes>
        <Route path="/recipes" element={<RecipesAZ/>}/>
        <Route path="/recipes/:letter" element={<RecipesAZList/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/random" element={<RandomRecipe/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
