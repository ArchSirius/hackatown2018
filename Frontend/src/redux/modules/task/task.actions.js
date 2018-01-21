import types from './task.types.js';

const fetchTasks = () => ({
  type: types.FETCH_TASKS
});
const fetchTasksSuccess = tasks => ({
  type: types.FETCH_TASKS_SUCCESS,
  tasks
});
const fetchTasksFailure = err => ({
  type: types.FETCH_TASKS_FAILURE,
  err
});

const createTask = () => ({
  type: types.CREATE_TASK
});
const createTaskSuccess = task => ({
  type: types.CREATE_TASK_SUCCESS,
  task
});
const createTaskFailure = err => ({
  type: types.CREATE_TASK_FAILURE,
  err
});

const updateTask = () => ({
  type: types.UPDATE_TASK
});
const updateTaskSuccess = res => ({
  type: types.UPDATE_TASK_SUCCESS,
  res
});
const updateTaskFailure = err => ({
  type: types.UPDATE_TASK_FAILURE,
  err
});

export default {
  fetchTasks,
  fetchTasksSuccess,
  fetchTasksFailure,

  createTask,
  createTaskSuccess,
  createTaskFailure,

  updateTask,
  updateTaskSuccess,
  updateTaskFailure
};
