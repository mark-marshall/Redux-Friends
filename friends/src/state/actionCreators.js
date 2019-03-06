import * as types from './actionTypes';

export function addFriend(friend) {
  return {
    type: types.ADD_FRIEND,
    payload: {
      name: friend.name,
      age: friend.age,
      email: friend. email,
    },
  };
}

export function getFriends(friends){
    return {
    type: types.GET_FRIENDS,
    payload: friends,
    }
}

export function deleteFriend(friend) {
return {
    type: types.DELETE_FRIEND,
    payload: {
        id: friend.id,
        name: friend.name,
        age: friend.age,
        email: friend.email,
    }
}
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

export function spinnrOff() {
  return {
    type: types.SPINNER_OFF,
  };
}
