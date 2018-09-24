import './Layout.css';

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'Components/Header';
import NavMenu from 'Components/NavMenu';
import MainPage from 'Components/MainPage';
import Footer from 'Components/Footer';
import PostsListContainer from 'Containers/PostsListContainer';
import PostContainer from 'Containers/PostContainer';
import CommentsListContainer from 'Containers/CommentsListContainer';
import UsersListContainer from 'Containers/UsersListContainer';

export default function Layout() {
  const menuItems = [
    { title: 'Главная', href: '/', exact: true },
    { title: 'Блог', href: '/posts', exact: false },
    { title: 'Комментарии', href: '/comments', exact: false },
    { title: 'Пользователи', href: '/users', exact: false },
  ];

  return (
    <div className="Layout">
      <div className="wrapper">
        <Header />

        <div className="container">
          <NavMenu items={menuItems} />

          <main className="main">
            <Switch>
              <Route path="/" component={MainPage} exact />
              <Route path="/posts" component={PostsListContainer} exact />
              <Route path="/posts/:postId" component={PostContainer} exact />
              <Route path="/comments" component={CommentsListContainer} exact />
              <Route path="/users" component={UsersListContainer} exact />
            </Switch>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
