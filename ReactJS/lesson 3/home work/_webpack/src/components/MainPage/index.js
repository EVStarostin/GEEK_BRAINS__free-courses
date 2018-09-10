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
        const dateParts1 = a.date.split('.').map(item => +item);
        const dateParts2 = b.date.split('.').map(item => +item);
        const date1 = new Date(dateParts1[2], dateParts1[1]-1, dateParts1[0]);
        const date2 = new Date(dateParts2[2], dateParts2[1]-1, dateParts2[0]);
        return date2 - date1;
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
