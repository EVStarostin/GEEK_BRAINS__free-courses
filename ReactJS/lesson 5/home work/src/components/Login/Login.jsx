import './Login.css';

import React, { PureComponent, Fragment } from 'react';
import { Modal } from 'react-bootstrap';

export default class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      isLoggedIn: false,
      login: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { login, password } = this.state;
    if (login !== '' && password !== '') {
      this.setState({ show: false, isLoggedIn: true });
    } else {
      alert('Введите логин и пароль');
    }
  }

  logOut = () => {
    this.setState({ isLoggedIn: false, login: '', password: '' });
  }

  render() {
    const {
      show,
      login,
      password,
      isLoggedIn,
    } = this.state;

    return (
      <div>
        {isLoggedIn ? (
          <Fragment>
            <span>{login}</span>
            <button type="button" className="logout-btn" onClick={this.logOut}>
              <span className="glyphicon glyphicon glyphicon-remove" aria-hidden="true" title="Выйти" />
            </button>
          </Fragment>
        ) : (
          <button type="button" className="login-btn" onClick={this.handleShow}>Войти</button>
        )}

        <Modal bsSize="small" show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Войти</Modal.Title>
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

              <div className="input-group">
                <span className="input-group-addon" id="password-input">
                  <span className="glyphicon glyphicon-lock" aria-hidden="true" />
                </span>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Пароль"
                  aria-describedby="password-input"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
              
              <button type="submit" className="btn btn-primary float-right">Войти</button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
