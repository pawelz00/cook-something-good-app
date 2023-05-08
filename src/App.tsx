import React from 'react';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
    <nav className="container">
      <ul>
        <li><strong>CookSomethingGood</strong></li>
        {/* <li><a href="#">Recipes A-Z</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">Random recipe!</a></li> */}
        <li>
          <Link to={'recipes'}>Recipes A-Z</Link>
        </li>
        <li>
          <Link to={'categories'}>Categories</Link>
        </li>
        <li>
          <Link to={'random'}>Random recipe!</Link>
        </li>
        <li>
          <Link to={'login'}>Logout</Link>
        </li>
      </ul>
    </nav>
    <main className='container'>
      <Outlet/>
    </main>
    </>
  );
}

export default App;
