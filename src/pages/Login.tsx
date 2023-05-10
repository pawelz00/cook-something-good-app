import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <main className='container login'>
        <h1 className='login-main-text'>
            CookSomething<span className="login-main-text-bad">Bad</span><span className="login-main-text-good">Good</span>
        </h1>
        <input type="text" placeholder='Enter your username...'/>
        <input type="password" placeholder='Enter your password...'/>
        <Link to={'/recipes'}>
            <button className='login-button'>Login</button>
        </Link>
    </main>
  );
}

export default Login;