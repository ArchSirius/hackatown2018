import types from './task.types';
import { combineReducers } from 'redux';
import { arrayToMapById } from '../../../utils/formatter';

const byId = (state = null, action) => {
  switch (action.type) {
    case types.FETCH_TASKS_SUCCESS:
      return arrayToMapById(action.tasks);
    case types.CREATE_TASK_SUCCESS:
      return {
        ...state,
        [action.task._id]: action.task
      };
    case types.UPDATE_TASK_SUCCESS:
      return {
        ...state,
        [action.res._id]: action.res
      };
    default:
      return state;
  }
};

export default combineReducers({
  byId
});
