import React from 'react';
import PropTypes from 'prop-types';

function PostsList(props) {
  const { postsList, handleClick } = props;

  return (
    postsList.map(post => (
      <article key={post.id} className="article">
        <header className="article__header">
          <h3><a href="#" data-id={post.id} onClick={handleClick}>{post.title}</a></h3>
        </header>

        <p className="article__paragraph">{post.paragraphs[0]}</p>
      </article>
    ))
  );
}

PostsList.propTypes = {
  postsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    userId: PropTypes.number,
    paragraphs: PropTypes.arrayOf(PropTypes.string),
  })),
  handleClick: PropTypes.func,
};

PostsList.defaultProps = {
  post: null,
  handleClick: PropTypes.func,
};

export default PostsList;
