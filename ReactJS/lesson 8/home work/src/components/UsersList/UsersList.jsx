import './UsersList.css';

import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Modal, DropdownButton, MenuItem,
} from 'react-bootstrap';

import { IUser } from 'Models';

export default class UsersList extends PureComponent {
  static propTypes = {
    users: PropTypes.arrayOf(IUser),
    addUser: PropTypes.func,
    deleteUser: PropTypes.func,
  };

  static defaultProps = {
    users: [],
    addUser: null,
    deleteUser: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      login: '',
    };
  }

  handleAddUserClick = () => {
    this.setState({ showModal: true });
  }

  handleClose = () => {
    this.setState({ showModal: false });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { login } = this.state;
    const { addUser } = this.props;

    if (login === '') {
      alert('Введите имя пользователя');
      return;
    }
    addUser(login);
    this.setState({ showModal: false });
  }

  render() {
    const { users, deleteUser } = this.props;
    const { showModal, login } = this.state;

    return (
      <Fragment>
        <button type="button" className="btn btn-primary delete-user-btn" onClick={this.handleAddUserClick}>
          Добавить пользователя
        </button>
        <ul className="list-group">
          {users.map(user => (
            <li key={user._id} className="list-group-item">
              <Link to={`/users/${user._id}`} className="userlist__user">
                <span className="glyphicon glyphicon-user" aria-hidden="true" />
                {' '}
                {user.name}
              </Link>
              <DropdownButton
                bsStyle="default"
                title="&#8226;&#8226;&#8226;"
                noCaret
                pullRight
                id="dropdown-no-caret"
              >
                <MenuItem eventKey="1">Редактировать</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={user._id} onSelect={deleteUser}>Удалить</MenuItem>
              </DropdownButton>
            </li>
          ))}
        </ul>
        <Modal bsSize="small" show={showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Добавить пользователя</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="login-form" onSubmit={this.handleSubmit}>
              <div className="input-group">
                <span className="input-group-addon" id="login-input">
                  <span className="glyphicon glyphicon-user" aria-hidden="true" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Имя пользователя"
                  aria-describedby="login-input"
                  name="login"
                  value={login}
                  onChange={this.handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary float-right">Добавить</button>
            </form>
          </Modal.Body>
        </Modal>
      </Fragment>
    );
  }
}
