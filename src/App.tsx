import React from 'react';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from './pages/Categories';
import RandomRecipe from './pages/Random-Recipe';
import RecipesAZ from './pages/RecipesAZ';
import RecipesAZList from './pages/RecipesAZList';
import Layout from './components/Layout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/recipes" element={<RecipesAZ/>}/>
          <Route path="/recipes/:letter" element={<RecipesAZList/>}/>
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/random" element={<RandomRecipe/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
