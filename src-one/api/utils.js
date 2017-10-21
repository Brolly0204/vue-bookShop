import axios from 'axios';

export const get = (url, params = {}) => {
  return axios.get(url, {
    params
  });
};

export const post = (url, params = {}) => {
  return axios.post(url, params);
};

export const remove = (url, params = {}) => {
  return axios.delete(url, params);
};

export const put = (url, params = {}) => {
  return axios.put(url, params);
};
