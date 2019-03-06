import * as types from './actionTypes';

// 2 reducers - 1 for friends array, 1 for spinner, and 1 for error

export function friends(friendsArray = [], action) {
  switch (action.type) {
    case types.GET_FRIENDS:
      return action.payload;
    case types.ADD_FRIEND:
      return friendsArray.concat(action.payload);
    case types.DELETE_FRIEND:
      return friendsArray.filter(friend => friend.id !== action.payload);
    case types.UPDATE_FRIEND:
      return friendsArray.map(friend => {
        if (friend.id === action.payload.id) {
          friend = action.payload;
          return friend;
        }
        return friend;
      });
    default:
      return friendsArray;
  }
}

export function spinner(isOn = false, action) {
  switch (action.type) {
    case types.SPINNER_ON:
      return true;
    case types.SPINNER_OFF:
      return false;
    default:
      return isOn;
  }
}

export function error(error = null, action) {
  switch (action.type) {
    case types.THROW_ERROR:
      return action.payload;
    default:
      return error;
  }
}
