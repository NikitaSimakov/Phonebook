import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const signUp = async body => {
  await instance.post('/users/signup', body);
};

export const logIn = async body => {
  const response = await instance.post('/users/login', body);
  return response;
};
