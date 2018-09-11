import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import './style.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <button className="login-btn" onClick={this.handleShow}>Войти</button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Войти</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="login-form">
              <div className="input-group">
                <span className="input-group-addon" id="login-input">
                  <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                </span>
                <input type="text" className="form-control" placeholder="Имя пользователя" aria-describedby="login-input" />
              </div>
              <div className="input-group">
                <span className="input-group-addon" id="password-input">
                  <span className="glyphicon glyphicon-lock" aria-hidden="true"></span>
                </span>
                <input type="password" className="form-control" placeholder="Пароль" aria-describedby="password-input" />
              </div>
              <button type="button" className="btn btn-primary float-right" onClick={this.handleClose}>Войти</button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Login;

