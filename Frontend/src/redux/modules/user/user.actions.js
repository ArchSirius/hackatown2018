import types from './user.types.js';

const loadProfile = () => ({
  type: types.LOAD_PROFILE
});
const loadProfileSuccess = info => ({
  type: types.LOAD_PROFILE_SUCCESS,
  info
});
const loadProfileFailure = err => ({
  type: types.LOAD_PROFILE_FAILURE,
  err
});

export default {
  loadProfile,
  loadProfileSuccess,
  loadProfileFailure
};
