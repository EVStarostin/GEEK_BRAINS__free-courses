import './UsersList.css';

import React from 'react';
import PropTypes from 'prop-types';

function UsersList(props) {
  const { users } = props;

  return (
    <ul className="list-group">
      {users.map((user, index) => (
        <li key={index} className="list-group-item">
          <a href="#" className="userlist__user">
            <span className="glyphicon glyphicon-user" aria-hidden="true" />
            {' '}
            {user.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
};

UsersList.defaultProps = {
  users: [],
};

export default UsersList;
