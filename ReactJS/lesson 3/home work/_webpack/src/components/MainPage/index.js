import React, { Component } from 'react';
import './style.css';

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { articles, focused } = this.props;
    let filteredArticles = [];
    if (focused === 0) {
      filteredArticles = articles.sort((a, b) => {
        const partsA = a.date.split('.').map(item => +item);
        const partsB = b.date.split('.').map(item => +item);
        const dateA = new Date(partsA[2], partsA[1]-1, partsA[0]);
        const dateB = new Date(partsB[2], partsB[1]-1, partsB[0]);
        return dateB - dateA;
      })
    } else {
      filteredArticles = articles.filter(item => item.categoryId === focused);
    }

    return (
      <main className="main-page">
        <div className="container">
          {filteredArticles.map((item, index) => 
              <article key={index} className="article">
                <header className="article__header">
                  <h3>{item.title}</h3>
                </header>
                {item.paragraphs.map((item, index) => 
                  <p key={index} className="article__paragraph">{item}</p>
                )}
                <footer className="article__footer">
                  <p className="article__date">{item.date}</p>
                </footer>
              </article>
          )}
        </div>
      </main>
    );
  }
}

export default MainPage;
