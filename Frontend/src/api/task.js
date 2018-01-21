import { endpointCall, json, JSON_HEADER } from '../utils/httpUtils';

export const fetchTasks = () => endpointCall(`/tasks`).then(json);

export const createTask = task =>
  endpointCall(`/tasks`, {
    method: 'POST',
    headers: JSON_HEADER,
    body: JSON.stringify(task)
  }).then(json);

export const updateTask = task =>
  endpointCall(`/tasks/${task.id}`, {
    method: 'PUT',
    headers: JSON_HEADER,
    body: JSON.stringify(task)
  }).then(json);

export default {
  fetchTasks,
  createTask,
  updateTask
};
