import actions from './user.actions';
import userApi from '../../../api/user';

export const fetchLoggedInClient = () => dispatch => {
  dispatch(actions.loadProfile());
  return userApi
    .fetchLoggedInUser()
    .then(info => dispatch(actions.loadProfileSuccess(info)))
    .catch(err => dispatch(actions.loadProfileFailure(err)));
};

export const superMagicButton = () => dispatch => {
  dispatch(actions.magicButton());
  return userApi.superMagicButton();
};

export default {
  fetchLoggedInClient,
  superMagicButton
};
