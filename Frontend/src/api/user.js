import { endpointCall, json } from '../utils/httpUtils';

export const fetchLoggedInUser = id =>
  endpointCall(`/demo/user`, {
    method: 'GET'
  }).then(json);

export const superMagicButton = id =>
  endpointCall(`/demo/reset`, {
    method: 'POST'
  });

export default {
  fetchLoggedInUser,
  superMagicButton
};
