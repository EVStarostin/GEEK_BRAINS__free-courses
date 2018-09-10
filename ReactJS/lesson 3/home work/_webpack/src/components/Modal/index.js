import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="loginModalLabel">Войти</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="login-input"><i class="fas fa-user"></i></span>
                  </div>
                  <input type="text" class="form-control" placeholder="Имя пользователя" aria-label="Username" aria-describedby="login-input"/>
                </div>
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="password-input"><i class="fas fa-unlock-alt"></i></span>
                  </div>
                  <input type="text" class="form-control" placeholder="Пароль " aria-label="Password" aria-describedby="password-input"/>
                </div>
                <button type="button" class="btn btn-primary float-right">Войти</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
