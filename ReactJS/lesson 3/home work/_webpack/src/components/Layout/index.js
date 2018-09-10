import React, { Component } from 'react';
import Modal from '../Modal';
import Footer from '../Footer';
import Menu from '../Menu';
import Login from '../Login';
import MainPage from '../MainPage';
import './style.css';

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <div className="wrapper">
          <header className="header">
            <div className="container">
              <div className="top-bar">
                <div className="logo-section">
                  <h1 className="logo">Блог</h1>
                </div>
                <div className="login-section">
                  <Login />
                </div>
              </div>
            </div>
          </header>
        
          <nav className="nav">
              <div className="container">
              <Menu />
            </div> 
          </nav>
        
          <div className="container">
            <MainPage />
          </div>
        </div>
        <Footer />
        <Modal />        
      </div>
    );
  }
}

export default Layout;
