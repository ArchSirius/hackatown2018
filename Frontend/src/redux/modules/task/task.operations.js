import actions from './task.actions';
import taskApi from '../../../api/task';

export const fetchTasks = () => dispatch => {
  dispatch(actions.fetchTasks());
  return taskApi
    .fetchTasks()
    .then(task => dispatch(actions.fetchTasksSuccess(task)))
    .catch(err => dispatch(actions.fetchTasksFailure(err)));
};

export const createTask = task => dispatch => {
  dispatch(actions.createTask());
  return taskApi
    .createTask(task)
    .then(task => dispatch(actions.createTaskSuccess(task)))
    .catch(err => dispatch(actions.createTaskFailure(err)));
};

export const updateTask = task => dispatch => {
  dispatch(actions.updateTask());
  return taskApi
    .updateTask(task)
    .then(res => dispatch(actions.updateTaskSuccess(res)))
    .catch(err => dispatch(actions.updateTaskFailure(err)));
};

export const updateTaskApplicant = (task, applicant) => dispatch => {
  return dispatch(
    updateTask({
      ...task,
      chosen: applicant._id,
    })
  );
};

export const updateTaskStatus = task => dispatch => {
  return dispatch(
    updateTask({
      ...task,
      done: true,
    })
  );
};

export default {
  fetchTasks,
  createTask,
  updateTask,
  updateTaskApplicant,
  updateTaskStatus,
};
