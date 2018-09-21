import React from 'react';
import PropTypes from 'prop-types';

function NavMenu(props) {
  const { handleClick, items, focused } = props;

  return (
    <nav className="nav">
      <ul className="nav nav-tabs">
        {
          items.map((item, index) => {
            let style = '';
            if (focused === index + 1) {
              style = 'active';
            }
            return (
              <li role="presentation" className={style} key={items.id}>
                <a href="#" data-id={item.id} onClick={handleClick}>
                  {item.name}
                </a>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
}

NavMenu.propTypes = {
  handleClick: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
  focused: PropTypes.number,
};

NavMenu.defaultProps = {
  handleClick: null,
  items: [],
  focused: 0,
};

export default NavMenu;
