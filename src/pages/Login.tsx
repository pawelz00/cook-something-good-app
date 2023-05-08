import React from 'react';

function Login() {
  return (
    <main className='container login'>
        <input type="text" placeholder='Enter your username...'/>
        <input type="password" placeholder='Enter your password...'/>
        <button className='login-button'>Login</button>
    </main>
  );
}

export default Login;