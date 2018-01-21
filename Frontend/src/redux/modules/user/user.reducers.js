import types from './user.types';
import { combineReducers } from 'redux';

const currentUser = (state = null, action) => {
  switch (action.type) {
    case types.LOAD_PROFILE_SUCCESS:
      return action.info;
    case types.UPDATE_TASK_SUCCESS:
      return action.task.user ? action.task.user : state;
    default:
      return state;
  }
};

export default combineReducers({
  currentUser
});
