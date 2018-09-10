import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">Войти</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="login-input"><i className="fas fa-user"></i></span>
                  </div>
                  <input type="text" className="form-control" placeholder="Имя пользователя" aria-label="Username" aria-describedby="login-input"/>
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="password-input"><i className="fas fa-unlock-alt"></i></span>
                  </div>
                  <input type="text" className="form-control" placeholder="Пароль " aria-label="Password" aria-describedby="password-input"/>
                </div>
                <button type="button" className="btn btn-primary float-right">Войти</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
