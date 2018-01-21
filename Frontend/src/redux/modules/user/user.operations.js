import actions from './user.actions';
import userApi from '../../../api/user';

export const fetchLoggedInClient = () => dispatch => {
  dispatch(actions.loadProfile());
  return userApi
    .fetchLoggedInUser()
    .then(info => dispatch(actions.loadProfileSuccess(info)))
    .catch(err => dispatch(actions.loadProfileFailure(err)));
};

export default {
  fetchLoggedInClient
};
