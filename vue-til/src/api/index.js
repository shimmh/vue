import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

// function registerUser(userData) {
//   const url = 'http://localhost:3000/signup';
//   return axios.post(url, userData);
// }

export { registerUser, loginUser };
