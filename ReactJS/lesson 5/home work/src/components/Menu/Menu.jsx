import './Menu.css';

import React from 'react';
import PropTypes from 'prop-types';

function Menu(props) {
  const { handleClick, items, focused } = props;

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
                  <a href="menu-item" name={item.id} onClick={handleClick}>
                    {item.name}
                  </a>
                </li>
              );
            })
          }
        </ul>
      </div>
    </nav>
  );
}

Menu.propTypes = {
  handleClick: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
  focused: PropTypes.number,
};

Menu.defaultProps = {
  handleClick: null,
  items: [],
  focused: 0,
};

export default Menu;
