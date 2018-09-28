import { REQUEST_POSTS_LIST, RECEIVE_POSTS_LIST_SUCCESS, RECEIVE_POSTS_LIST_FAIL } from 'Constants';

function requestPostsList() {
  return {
    type: REQUEST_POSTS_LIST,
  };
}

export function receivePostsListSuccess(postsList) {
  return {
    type: RECEIVE_POSTS_LIST_SUCCESS,
    postsList,
  };
}

export function receivePostsListFail(error) {
  return {
    type: RECEIVE_POSTS_LIST_FAIL,
    error,
  };
}

export function fetchPostsList() {
  return (dispatch) => {
    dispatch(requestPostsList());
    return fetch('api/posts')
      .then(response => response.json())
      .then(postsList => dispatch(receivePostsListSuccess(postsList)))
      .catch(error => dispatch(receivePostsListFail(error)));
  };
}
