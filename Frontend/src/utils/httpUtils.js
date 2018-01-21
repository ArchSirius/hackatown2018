const API_URL = 'http://caremmunity.archsirius.com/api';
const ENDPOINT_PREFIX = `${API_URL}`;

const queryParams = params =>
  Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');

const extendUrl = (url, params) =>
  params ? `${url}?${queryParams(params)}` : url;

const status = res => {
  if (res.status >= 200 && res.status < 300) {
    return Promise.resolve(res);
  } else {
    if (res.status === 401 || res.status === 403) {
      console.log('ERROR HAPPEND');
    }
    return res.json().then(res => Promise.reject(res));
  }
};

export function text(res) {
  return res.text();
}

export function json(res) {
  return res.json();
}

export const JSON_HEADER = { 'Content-type': 'application/json' };

export function endpointCall(url, options = {}) {
  return fetch(ENDPOINT_PREFIX + url, options).then(status);
}
