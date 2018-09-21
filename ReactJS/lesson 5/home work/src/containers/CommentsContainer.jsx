import React, { PureComponent, Fragment } from 'react';

import Errors from 'Components/Errors';
import Loading from 'Components/Loading';

export default class CommentsContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { commentsList: [], fetching: false, errors: [] };
  }

  componentDidMount = () => {
    this.setState({ fetching: true, errors: [] });

    fetch('api/comments?_expand=post')
      .then(response => response.json())
      .then(commentsList => this.setState({ commentsList, fetching: false }))
      .catch(error => this.setState(({ errors }) => (
        { errors: errors.concat(error), fetching: false }
      )));
  }

  render() {
    const { commentsList, fetching, errors } = this.state;

    if (fetching) {
      return (
        <Loading />
      );
    }

    return (
      <Fragment>
        {errors.length > 0 && (
          <Errors errors={errors} />
        )}

        {commentsList.map((comment, index) => (
          <blockquote key={index}>
            <p><q>{comment.text}</q></p>
            <p><cite><a href="#">{comment.post.title}</a></cite></p>
          </blockquote>
        ))}
      </Fragment>
    );
  }
}
