import './Posts.css';

import React, { PureComponent, Fragment } from 'react';

import { getPosts, getPostById, getUserById } from 'Utils/fetching';

export default class Posts extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      postsList: [],
      fetching: false,
      errors: [],
      post: null,
      author: null,
    };
  }

  componentDidMount = () => {
    this.setState({ fetching: true, errors: [] });

    getPosts()
      .then(postsList => this.setState({
        postsList,
        fetching: false,
      }))
      .catch(error => this.setState(prevState => ({
        errors: prevState.errors.concat(error),
        fetching: false,
      })));
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ fetching: true, errors: [] });

    const postId = +e.target.dataset.id;

    getPostById(postId)
      .then((post) => {
        this.setState({
          post,
        });
        return getUserById(post.userId);
      })
      .then((author) => {
        this.setState({
          author,
          fetching: false,
        });
      })
      .catch(error => this.setState(prevState => ({
        errors: prevState.errors.concat(error),
        fetching: false,
      })));
  }

  handleGoBackClick = (e) => {
    e.preventDefault();
    this.setState({ post: null });
  }

  render() {
    const {
      postsList,
      fetching,
      errors,
      post,
      author,
    } = this.state;

    if (fetching) {
      return (
        <div className="alert alert-success" role="alert">Loading ...</div>
      );
    }

    return (
      <Fragment>
        {errors.length > 0 && (
          <div className="alert alert-danger" role="alert">
            {errors.map((error, index) => <p key={index}>{error.message}</p>)}
          </div>
        )}

        {post ? (
          <article className="article">
            <header className="article__header">
              <h3>{post.title}</h3>
            </header>

            {post.paragraphs.map((paragraph, index) => (
              <p key={index} className="article__paragraph">{paragraph}</p>
            ))}

            <footer className="article__footer">
              <p className="article__author">{author.name}</p>
            </footer>

            <a href="#" onClick={this.handleGoBackClick}>
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
              Вернуться ко списку постов
            </a>
          </article>
        ) : (
          postsList.map(item => (
            <article key={item.id} className="article">
              <header className="article__header">
                <h3><a href="#" data-id={item.id} onClick={this.handleClick}>{item.title}</a></h3>
              </header>

              <p className="article__paragraph">{item.paragraphs[0]}</p>
            </article>
          ))
        )}
      </Fragment>
    );
  }
}
