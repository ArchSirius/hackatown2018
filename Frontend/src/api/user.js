import { endpointCall, json } from '../utils/httpUtils';

export const fetchUser = id =>
  endpointCall(`/users/${id}`, {
    method: 'GET'
  }).then(json);
