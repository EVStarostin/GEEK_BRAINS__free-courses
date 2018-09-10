import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="container">
          <ul className="nav-menu">
            <li className="nav-menu__item focused">
              <a href="#">Главная</a>
            </li>
            <li className="nav-menu__item">
              <a href="#">Важное</a>
            </li>
            <li className="nav-menu__item">
              <a href="#">Слово Москве</a>
            </li>
            <li className="nav-menu__item">
              <a href="#">ЖЖизнь</a>
            </li>
            <li className="nav-menu__item">
              <a href="#">СССР</a>
            </li>
            <li className="nav-menu__item">
              <a href="#">Общество</a>
            </li>
            <li className="nav-menu__item">
              <a href="#">Рубль</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;