import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import commentsReducer from './commentsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  postsReducer,
  commentsReducer,
  usersReducer,
});
