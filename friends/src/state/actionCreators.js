import * as types from './actionTypes';
import axios from '../axios/axios';

const tokenURL = 'http://localhost:5000/api/login';
const friendsURL = 'http://localhost:5000/api/friends';

export const getTokenAsync = () => dispatch => {
  dispatch(spinnerOn());
  axios()
  // switch up this object to the login values
    .post(tokenURL, { username: 'Lambda School', password: 'i<3Lambd4' })
    .then(token => {
      localStorage.setItem('token', token.data.payload);
      dispatch(spinnerOff());
    })
    .catch(error => {
      dispatch(throwError(error.message));
    });
};

export const getFriendsAsync = () => dispatch => {
  dispatch(spinnerOn());
  axios()
    .get(friendsURL)
    .then(friends => {
      dispatch(getFriends(friends.data));
      dispatch(spinnerOff());
    })
    .catch(error => {
      dispatch(throwError(error.message));
    });
};

export const addFriendAsync = friend => dispatch => {
  dispatch(spinnerOn());
  axios()
    .post(friendsURL, friend)
    .then(friends => {
      dispatch(getFriends(friends.data));
      dispatch(spinnerOff());
    })
    .catch(error => {
      dispatch(throwError(error.message));
    });
};

export const deleteFriendAsync = id => dispatch => {
  dispatch(spinnerOn());
  axios()
    .delete(`${friendsURL}/${id}`)
    .then(friends => {
      dispatch(getFriends(friends.data));
      dispatch(spinnerOff());
    })
    .catch(error => {
      dispatch(throwError(error.message));
    });
};

export const updateFriendAsync = friend => dispatch => {
  dispatch(spinnerOn());
  axios()
    .put(`${friendsURL}/${friend.id}`, friend)
    .then(friends => {
      dispatch(getFriends(friends.data));
      dispatch(spinnerOff());
    })
    .catch(error => {
      dispatch(throwError(error.message));
    });
};

export function addFriend(friend) {
  return {
    type: types.ADD_FRIEND,
    payload: {
      name: friend.name,
      age: friend.age,
      email: friend.email,
    },
  };
}

export function getFriends(friends) {
  return {
    type: types.GET_FRIENDS,
    payload: friends,
  };
}

export function updateFriend(friend) {
  return {
    type: types.DELETE_FRIEND,
    payload: {
      id: friend.id,
      name: friend.name,
      age: friend.age,
      email: friend.email,
    },
  };
}

export function deleteFriend(id) {
  return {
    type: types.DELETE_FRIEND,
    payload: id,
  };
}

export function throwError(error) {
  return {
    type: types.THROW_ERROR,
    payload: error,
  };
}

export function spinnerOn() {
  return {
    type: types.SPINNER_ON,
  };
}

export function spinnerOff() {
  return {
    type: types.SPINNER_OFF,
  };
}

export function editModeOn() {
  return {
    type: types.EDIT_MODE_ON,
  };
}

export function editModeOff() {
    return {
      type: types.EDIT_MODE_OFF,
    };
  }
