import { handleActions } from 'redux-actions';

import {
  loadUsersListRequest,
  loadUsersListFailure,
  loadUsersListSuccess,
  loadUserRequest,
  loadUserFailure,
  loadUserSuccess,
  addUserRequest,
  addUserFailure,
  addUserSuccess,
  deleteUserRequest,
  deleteUserFailure,
  deleteUserSuccess,
} from 'Actions/usersActions';

const initialState = {
  usersList: [],
  user: null,
  fetching: false,
  errors: [],
};

export default handleActions({
  [loadUsersListRequest]: state => ({
    ...state,
    usersList: [],
    errors: [],
    fetching: true,
  }),
  [loadUsersListFailure]: (state, action) => ({
    ...state,
    errors: state.errors.concat([action.payload]),
    fetching: false,
  }),
  [loadUsersListSuccess]: (state, action) => ({
    ...state,
    usersList: action.payload,
    fetching: false,
  }),
  [loadUserRequest]: state => ({
    ...state,
    user: null,
    errors: [],
    fetching: true,
  }),
  [loadUserFailure]: (state, action) => ({
    ...state,
    errors: state.errors.concat([action.payload]),
    fetching: false,
  }),
  [loadUserSuccess]: (state, action) => ({
    ...state,
    user: action.payload,
    fetching: false,
  }),
  [addUserRequest]: state => ({
    ...state,
    errors: [],
    fetching: true,
  }),
  [addUserFailure]: (state, action) => ({
    ...state,
    errors: state.errors.concat([action.payload]),
    fetching: false,
  }),
  [addUserSuccess]: (state, action) => ({
    ...state,
    usersList: state.usersList.concat([action.payload]),
    fetching: false,
  }),
  [deleteUserRequest]: state => ({
    ...state,
    errors: [],
    fetching: true,
  }),
  [deleteUserFailure]: (state, action) => ({
    ...state,
    errors: state.errors.concat([action.payload]),
    fetching: false,
  }),
  [deleteUserSuccess]: (state, action) => ({
    ...state,
    usersList: state.usersList.filter(user => user._id !== action.payload._id),
    fetching: false,
  }),
}, initialState);
