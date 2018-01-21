import { endpointCall, json } from '../utils/httpUtils';

export const fetchLoggedInUser = id =>
  endpointCall(`/demo/user`, {
    method: 'GET'
  }).then(json);

export default {
  fetchLoggedInUser
};
