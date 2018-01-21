export const getById = state => state.task.byId;

export const getAllTasks = state =>
  state.task.byId ? Object.values(state.task.byId) : [];

export const getMyTasks = state =>
  state.task.byId
    ? Object.values(state.task.byId).filter(
        task => task.creator._id === state.user.currentUser._id
      )
    : [];

export const getAppliedTasks = state =>
  state.task.byId
    ? Object.values(state.task.byId).filter(task =>
        task.applicants.some(user => user._id === state.user.currentUser._id)
      )
    : [];

export const getUnassignedTask = state => {
  return state.task.byId
    ? Object.values(state.task.byId)
        .filter(task => task.creator._id !== state.user.currentUser._id)
        .filter(task => task.applicants.includes(state.user.currentUser))
    : [];
};

export default {
  getById,
  getAllTasks,
  getMyTasks,
  getAppliedTasks,
  getUnassignedTask,
};
