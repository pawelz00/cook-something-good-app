import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, } from "react-router-dom";
import './styles/index.css';
import Login from './pages/Login';
import App from './App'
import ErrorPage from './pages/Error-Page';
import Sample from './pages/Sample-Page';
import RecipesAZ from './pages/RecipesAZ';
import Categories from './pages/Categories';
import RandomRecipe from './pages/Random-Recipe';
import { basename } from 'path';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App/>
);
