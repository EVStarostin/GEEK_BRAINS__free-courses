import { INCREMENT, DECREMENT } from 'Constants';

export function incrementPosts() {
  return {
    type: INCREMENT,
  };
}

export function decrementPosts() {
  return {
    type: DECREMENT,
  };
}
