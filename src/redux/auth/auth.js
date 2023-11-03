import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});
export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearToken = () => {
  delete axios.defaults.headers.common.Authorization;
};

export const signUp = async body => {
  const response = await instance.post('/users/signup', body);
  return response;
};

export const logIn = async body => {
  const response = await instance.post('/users/login', body);
  setToken(response.data.token);
  return response;
};

export const logOut = async () => {
  const response = await instance.post('/users/logout');
  clearToken();
  console.log(response);
  return response;
};

// export const logOut = async () => {
//   const { data } = await instance.post('/users/logout');
//   clearToken();
//   console.log(data);
//   return data;
// };

export const refreshUser = async () => {
  const response = await instance('users/current');
  return response;
};
