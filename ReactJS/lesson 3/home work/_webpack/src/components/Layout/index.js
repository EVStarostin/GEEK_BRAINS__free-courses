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
        
          <nav className="nav">
            <div className="container">
              <Menu />
            </div> 
          </nav>
        
          <main className="main-page">
            <div className="container">
              <MainPage />
            </div>
          </main>
        </div>

        <Footer />
        
        <Modal />        
      </div>
    );
  }
}

export default Layout;
