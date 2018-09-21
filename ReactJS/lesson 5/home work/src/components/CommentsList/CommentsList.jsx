import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function CommentsList(props) {
  const { commentsList } = props;

  return (
    <Fragment>
      {commentsList.map((comment, index) => (
        <blockquote key={index}>
          <p><q>{comment.text}</q></p>
          <p><cite><a href="#">{comment.post.title}</a></cite></p>
        </blockquote>
      ))}
    </Fragment>
  );
}

CommentsList.propTypes = {
  commentsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    postId: PropTypes.number,
    userid: PropTypes.number,
    text: PropTypes.string,
  })),
};

CommentsList.defaultProps = {
  commentsList: [],
};

export default CommentsList;
