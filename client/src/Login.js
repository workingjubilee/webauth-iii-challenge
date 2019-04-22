import React, { useState, useEffect } from 'react';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  handleSubmit = event => useEffect(
    event.preventDefault(),

    console.log("Blah!")
    );

  return (
  <form onSubmit={handleSubmit}>

      <input type="text" value={username} name="username" onChange={event => setUsername(event.target.value)} />
      <input type="password" value={username} name="password" onChange={event => setUsername(event.target.value)} />
      <button type="submit">Login</button>

  </form>);
}

export default Login