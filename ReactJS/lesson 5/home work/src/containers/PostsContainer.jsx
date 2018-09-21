import React, { PureComponent, Fragment } from 'react';

import Errors from 'Components/Errors';
import Loading from 'Components/Loading';
import PostsList from 'Components/PostsList';
import SinglePost from 'Components/SinglePost';

export default class PostsContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      postsList: [], fetching: false, errors: [], post: null,
    };
  }

  componentDidMount = () => {
    this.setState({ fetching: true, errors: [] });

    fetch('api/posts?_expand=user')
      .then(response => response.json())
      .then(postsList => this.setState({ postsList, fetching: false }))
      .catch(error => this.setState(({ errors }) => (
        { errors: errors.concat(error), fetching: false }
      )));
  }

  handleOpenPostClick = (e) => {
    e.preventDefault();

    const id = +e.target.dataset.id;
    const { postsList } = this.state;
    const post = postsList.find(item => item.id === id);
    console.log('post', post);
    this.setState({ post });
  }

  handleGoBackClick = (e) => {
    e.preventDefault();
    this.setState({ post: null });
  }

  render() {
    const {
      postsList, fetching, errors, post,
    } = this.state;

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

        {post ? (
          <SinglePost post={post} handleClick={this.handleGoBackClick} />
        ) : (
          <PostsList postsList={postsList} handleClick={this.handleOpenPostClick} />
        )}
      </Fragment>
    );
  }
}
