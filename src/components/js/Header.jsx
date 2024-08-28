// Header.js

import React from 'react';
import '../css/Header.css'; // Import your CSS file for styling

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Cricket Gallery and Awards</h1>
        <nav className="header-nav">
          <ul>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#cricket-news-container">News</a></li>
            <li><a href="#awards">Awards</a></li>
            <li><a href="#player-profiles">Player Profile</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
