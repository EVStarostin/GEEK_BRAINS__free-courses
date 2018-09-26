import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Errors from 'Components/Errors';
import Loading from 'Components/Loading';
import PostsList from 'Components/PostsList';
import { IPost, IError } from 'Models';
import { fetchPosts } from 'Actions';

class PostsListContainer extends PureComponent {
  static propTypes = {
    posts: PropTypes.arrayOf(IPost),
    fetching: PropTypes.bool,
    errors: PropTypes.arrayOf(IError),
    dispatch: PropTypes.func,
  };

  static defaultProps = {
    posts: [],
    fetching: false,
    errors: [],
    dispatch: null,
  };

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(fetchPosts());
  }

  render() {
    const { posts, fetching, errors } = this.props;

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

        <PostsList posts={posts} />
      </Fragment>
    );
  }
}

function mapStateToProps({ posts }}) {
  return { ...posts };
}

export default connect(mapStateToProps)(PostsListContainer);
