import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact style={link} activeStyle={{ background: 'tomato' }}>Home</NavLink>
      <NavLink to="/Movies" exact style={link} activeStyle={{ background: 'tomato'}}>Movies</NavLink>
      <NavLink to="/Actors" exact style={link} activeStyle={{ background: 'tomato' }}>Actors</NavLink>
      <NavLink to="/Directors" exact style={link} activeStyle={{ background: 'stomato' }}>Directors</NavLink>
    </div>
  );
};

export default NavBar;
