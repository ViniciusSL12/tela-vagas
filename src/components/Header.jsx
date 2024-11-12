import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <input type="text" placeholder="Recife" className="search-bar" />
    <button className="home-button">🔍</button>
  </header>
);

export default Header;