import React, { Component } from 'react';
import './style.css';

class Menu extends Component {
  render() {
    const { handleClick, items, focused } = this.props;
    return (
      <nav className="nav">
        <div className="container">
          <ul className="nav-menu">
            {
              items.map((item, index) => {
                let style = 'nav-menu__item';
                if (focused === index) {
                  style = 'nav-menu__item focused';
                }
                return (
                  <li className={style} key={index}>
                    <a href="#" onClick={handleClick.bind(null, item.id)}>
                      {item.name}
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
