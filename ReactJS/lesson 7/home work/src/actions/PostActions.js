import { REQUEST_POST, RECEIVE_POST_SUCCESS, RECEIVE_POST_FAIL } from 'Constants';

function requestPost() {
  return {
    type: REQUEST_POST,
  };
}

export function receivePostSuccess(post) {
  return {
    type: RECEIVE_POST_SUCCESS,
    post,
  };
}

export function receivePostFail(error) {
  return {
    type: RECEIVE_POST_FAIL,
    error,
  };
}

export function fetchPost() {
  return (dispatch) => {
    dispatch(requestPost());
    return fetch(`api/posts/${match.params.postId}?_expand=user`)
      .then(response => response.json())
      .then(post => dispatch(receivePostSuccess(post)))
      .catch(error => dispatch(receivePostFail(error)));
  };
}
