import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Errors from 'Components/Errors';
import Loading from 'Components/Loading';
import UsersList from 'Components/UsersList';
import { fetchUsersList, addUser } from 'Actions/usersActions';
import { IUser, IError } from 'Models';

class UsersListContainer extends PureComponent {
  static propTypes = {
    usersList: PropTypes.arrayOf(IUser),
    fetching: PropTypes.bool,
    errors: PropTypes.arrayOf(IError),
    getUsersList: PropTypes.func,
    addNewUser: PropTypes.func,
  };

  static defaultProps = {
    usersList: [],
    fetching: false,
    errors: [],
    getUsersList: null,
    addNewUser: null,
  };

  componentDidMount = () => {
    const { getUsersList } = this.props;
    getUsersList();
  }

  render() {
    const {
      usersList, fetching, errors, addNewUser,
    } = this.props;

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

        <UsersList users={usersList} addUser={addNewUser} />
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    usersList: state.users.usersList,
    fetching: state.users.fetching,
    errors: state.users.errors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsersList: () => dispatch(fetchUsersList()),
    addNewUser: userName => dispatch(addUser(userName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);
