import React, { PureComponent, Fragment } from 'react';

export default class PostsContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      users: [], fetching: false, errors: [],
    };
  }

  componentDidMount = () => {
    this.setState({ fetching: true, errors: [] });

    fetch('api/users')
      .then(response => response.json())
      .then(users => this.setState({ users, fetching: false }))
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
      users, fetching, errors,
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
