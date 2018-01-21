import types from './user.types';
import taskTypes from '../task/task.types';
import { combineReducers } from 'redux';

const currentUser = (state = null, action) => {
  switch (action.type) {
    case types.LOAD_PROFILE_SUCCESS:
      return action.info;
    case taskTypes.UPDATE_TASK_SUCCESS:
      return action.res.done ? {...state, points: action.res.creator.points} : state;
    default:
      return state;
  }
};

export default combineReducers({
  currentUser
});
