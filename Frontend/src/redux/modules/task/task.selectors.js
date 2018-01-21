export const getById = state => state.task.byId;

export const getAllTasks = state =>
  state.task.byId
    ? Object.values(state.task.byId).filter(task => !task.done)
    : [];

export const getMyTasks = state =>
  state.task.byId
    ? Object.values(state.task.byId).filter(
        task => task.creator._id === state.user.currentUser._id && !task.done
      )
    : [];

export const getAppliedTasks = state =>
  state.task.byId
    ? Object.values(state.task.byId).filter(
        task =>
          task.applicants.some(
            user => user._id === state.user.currentUser._id
          ) &&
          (!task.chosen || task.chosen === state.user.currentUser._id)
          && !task.done
      )
    : [];

export const getUnassignedTask = state => {
  return state.task.byId
    ? Object.values(state.task.byId)
        .filter(task => task.creator._id !== state.user.currentUser._id && !task.done && !task.chosen)
        .filter(task => {
          let applicantIds = task.applicants.map(applicant => applicant._id);
          return !applicantIds.includes(state.user.currentUser._id);
        })
    : [];
};

export default {
  getById,
  getAllTasks,
  getMyTasks,
  getAppliedTasks,
  getUnassignedTask,
};
