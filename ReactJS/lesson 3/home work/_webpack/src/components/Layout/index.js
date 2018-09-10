import React, { Component } from 'react';
import Header from '../Header';
import Menu from '../Menu';
import MainPage from '../MainPage';
import Footer from '../Footer';
import Modal from '../Modal';
import './style.css';

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <div className="wrapper">
          <Header />
          <Menu />
          <MainPage />
        </div>
        <Footer />
        <Modal />        
      </div>
    );
  }
}

export default Layout;
