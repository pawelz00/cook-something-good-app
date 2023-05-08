import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/index.css';
import Login from './pages/Login';
import App from './App'
import ErrorPage from './pages/Error-Page';
import Sample from './pages/Sample-Page';
import RecipesAZ from './pages/RecipesAZ';
import Categories from './pages/Categories';
import RandomRecipe from './pages/Random-Recipe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/recipes",
        element: <RecipesAZ/>
      },
      {
        path: "/categories",
        element: <Categories/>
      },
      {
        path: "/random",
        element: <RandomRecipe/>
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <ErrorPage/>,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);
