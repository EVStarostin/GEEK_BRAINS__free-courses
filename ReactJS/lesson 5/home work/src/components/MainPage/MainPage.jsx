import './MainPage.css';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class MainPage extends PureComponent {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      date: PropTypes.string,
      categoryId: PropTypes.number,
      paragraphs: PropTypes.arrayOf(PropTypes.string),
    })),
    focused: PropTypes.number,
  }

  static defaultProps = {
    posts: [],
    focused: 0,
  }

  render() {
    const { posts, focused } = this.props;
    let filteredPosts = [];
    if (focused === 0) {
      filteredPosts = posts.sort((a, b) => {
        const partsA = a.date.split('.').map(item => +item);
        const partsB = b.date.split('.').map(item => +item);
        const dateA = new Date(partsA[2], partsA[1] - 1, partsA[0]);
        const dateB = new Date(partsB[2], partsB[1] - 1, partsB[0]);
        return dateB - dateA;
      });
    } else {
      filteredPosts = posts.filter(item => item.categoryId === focused);
    }

    return (
      <main className="main-page">
        <div className="container">
          {filteredPosts.map(article => (
            <article key={article.id} className="article">
              <header className="article__header">
                <h3>{article.title}</h3>
              </header>
              {article.paragraphs.map((paragraph, index) => (
                <p key={index} className="article__paragraph">{paragraph}</p>
              ))}
              <footer className="article__footer">
                <p className="article__date">{article.date}</p>
              </footer>
            </article>
          ))}
        </div>
      </main>
    );
  }
}
