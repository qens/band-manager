import React from 'react';

const Login = ({onClick, username, password}) => (<div>
    <h1>Login</h1>
    <input value={username} onChange={(ev) => username = ev.target.value}/>
    <input value={password} onChange={(ev) => password = ev.target.value}/>
    <button onClick={() => onClick({username, password})}>Login</button>
</div>)

export default Login;