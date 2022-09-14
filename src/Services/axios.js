import axios from "axios";

function signUp(body) {
  return axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-up`, body);
}
function signIn(body) {
  return axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-in`, body);
}
function getRegistries(config) {
  return axios.get(`${process.env.REACT_APP_API_BASE_URL}/registries`, config);
}
function sendRegistry(body, config) {
  return axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/registries`,
    body,
    config
  );
}
function deleteRegistry(idRegistry, config) {
  return axios.delete(
    `${process.env.REACT_APP_API_BASE_URL}/registries/${idRegistry}`,
    config
  );
}
function updateRegistry(idRegistry, body, config) {
  return axios.put(
    `${process.env.REACT_APP_API_BASE_URL}/${idRegistry}`,
    body,
    config
  );
}
function deleteSession(config) {
  return axios.delete(`${process.env.REACT_APP_API_BASE_URL}/session`, config);
}
export {
  signUp,
  signIn,
  getRegistries,
  sendRegistry,
  deleteRegistry,
  updateRegistry,
  deleteSession,
};
