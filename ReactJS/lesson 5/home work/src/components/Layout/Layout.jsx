import './Layout.css';

import React, { PureComponent } from 'react';

import Header from 'Components/Header';
import NavMenu from 'Components/NavMenu';
import MainPage from 'Components/MainPage';
import Posts from 'Components/Posts';
import Footer from 'Components/Footer';

export default class Layout extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      focused: 1,
    };
  }

  handleNavMenuClick = (e) => {
    const focused = +e.target.dataset.id;
    e.preventDefault();
    this.setState({ focused });
  }

  render() {
    const { focused } = this.state;
    const menuItems = [
      { id: 1, name: 'Главная' },
      { id: 2, name: 'Блог' },
      { id: 3, name: 'Комментарии' },
      { id: 4, name: 'Пользователи' },
    ];

    return (
      <div className="Layout">
        <div className="wrapper">
          <Header />
          <div className="container">
            <NavMenu items={menuItems} handleClick={this.handleNavMenuClick} focused={focused} />
            <main className="main-page">
              {focused === 1 && <MainPage />}
              {focused === 2 && <Posts />}
              {focused === 3 && <div>Комментарии</div>}
              {focused === 4 && <div>Пользователи</div>}
            </main>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
