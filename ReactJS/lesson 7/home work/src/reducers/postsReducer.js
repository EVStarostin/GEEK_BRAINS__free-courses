import { REQUEST_POSTS_LIST, RECEIVE_POSTS_LIST_SUCCESS, RECEIVE_POSTS_LIST_FAIL } from 'Constants';

const initialState = {
  posts: [],
  fetching: false,
  errors: [],
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS_LIST:
      return {
        ...state,
        fetching: true,
      };
    case RECEIVE_POSTS_LIST_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        fetching: false,
      };
    case RECEIVE_POSTS_LIST_FAIL:
      return {
        ...state,
        errors: state.errors.concat(action.error),
        fetching: false,
      };
    default:
      return state;
  }
}
