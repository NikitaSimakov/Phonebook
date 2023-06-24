import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const signUp = async body => {
  await instance.post('/users/signup', body);
};
