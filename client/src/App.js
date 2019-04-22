import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Login from './Login.js';
import Users from './Users.js';

function App(props){

  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/users">Users</NavLink>
        <button onClick={logout}>Logout</button>
      </header>
      <main>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
      </main>
    </>
  );

  function logout() {
    localStorage.removeItem('token');
  };

}

function Home(props) {
  return <h1>Home Component</h1>;
}

export default App;