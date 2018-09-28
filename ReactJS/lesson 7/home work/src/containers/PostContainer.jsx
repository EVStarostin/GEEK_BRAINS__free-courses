import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import Errors from 'Components/Errors';
import Loading from 'Components/Loading';
import Post from 'Components/Post';

export default class PostsContainer extends PureComponent {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        postId: PropTypes.string,
      }),
    });
  };

  static defaultProps = {
    match: {
      params: { postId: '' },
    },
    post: null,
    fetching: false,
    errors: [],
    dispatch: null,
  };

  componentDidMount = () => {
    const { match } = this.props;
    fetch(`api/posts/${match.params.postId}?_expand=user`)
      .then(response => response.json())
      .then(post => this.setState({ post, fetching: false }))
      .catch(error => this.setState(({ errors }) => (
        { errors: errors.concat(error), fetching: false }
      )));
  }

  render() {
    const { post, fetching, errors } = this.props;

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

        <Post post={post} />
      </Fragment>
    );
  }
}

function mapStateToProps({ posts }) {
  return { ...posts };
}

export default connect(mapStateToProps)(PostsContainer);