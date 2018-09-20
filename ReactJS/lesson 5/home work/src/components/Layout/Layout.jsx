import './Layout.css';

import React, { PureComponent } from 'react';

import Header from 'Components/Header';
import Menu from 'Components/Menu';
import MainPage from 'Components/MainPage';
import Footer from 'Components/Footer';

export default class Layout extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      focused: 0,
      categories: [],
      posts: [],
    };
  }

  componentDidMount = () => {
    fetch('api/categories')
      .then(response => response.json())
      .then(categories => (
        this.setState({
          categories,
        })
      ));

    fetch('api/posts')
      .then(response => response.json())
      .then(posts => (
        this.setState({
          posts,
        })
      ));
  }

  handleClick = (e) => {
    const index = +e.target.dataset('id');
    e.preventDefault();
    this.setState({ focused: index });
  }

  render() {
    const { focused, categories, posts } = this.state;
    const menuItems = [{ id: 0, name: 'Главная' }].concat(categories);
    return (
      <div className="Layout">
        <div className="wrapper">
          <Header />
          <Menu items={menuItems} handleClick={this.handleClick} focused={focused} />
          <MainPage posts={posts} focused={focused} />
        </div>
        <Footer />
      </div>
    );
  }
}
