import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/",
});

const invokeAuth = (token) => {
  instance.defaults.headers['Authorization'] = token;
};

const revokeAuth = (token) => {
  delete instance.defaults.headers['Authorization'];
};

export default instance;
export {invokeAuth, revokeAuth};