import React, { Component } from 'react';
import './style.css';

class MainPage extends Component {
  render() {
    return (
      <button className="login-btn" data-toggle="modal" data-target="#loginModal">
        Войти
      </button>
    );
  }
}

export default MainPage;

