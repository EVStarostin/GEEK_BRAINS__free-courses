import React, { Component } from 'react';
import Header from '../Header';
import Menu from '../Menu';
import MainPage from '../MainPage';
import Footer from '../Footer';
import Modal from '../Modal';
import './style.css';

import categories from '../../../mock/categories';
import articles from '../../../mock/articles';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {focused: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index, e){
    e.preventDefault();
    this.setState({focused: index});
  }

  render() {
    const { focused } = this.state;
    const menuItems = [{id: 0, name: 'Главная'}].concat(categories);
    return (
      <div className="Layout">
        <div className="wrapper">
          <Header />
          <Menu items={menuItems} handleClick={this.handleClick} focused={focused} />
          <MainPage articles={articles} focused={focused} />
        </div>
        <Footer />
        <Modal />
      </div>
    );
  }
}

export default Layout;
