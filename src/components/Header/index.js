import React from 'react';

import './styles.css';

export default function Header() {
  function openNav() {
    document.body.classList.toggle('nav-open');
  }

  function removeNav() {
    document.body.classList.remove('nav-open');
  }

  return (
    <header>
      <button
        class="nav-toggle"
        aria-label="toggle-navigation"
        onClick={openNav}
      >
        <span class="hamburguer"></span>
      </button>

      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#home" class="nav__link" onClick={removeNav}>
              Home
            </a>
          </li>
          <li class="nav__item">
            <a href="#services" class="nav__link" onClick={removeNav}>
              Services
            </a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link" onClick={removeNav}>
              About
            </a>
          </li>
          <li class="nav__item">
            <a href="#work" class="nav__link" onClick={removeNav}>
              Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
