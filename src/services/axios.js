import axios from "axios";

function config() {
  const user = JSON.parse(localStorage.getItem("user"));
  return { headers: { Authorization: `Bearer ${user.token}` } };
}

function signUp(body) {
  return axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-up`, body);
}
function signIn(body) {
  return axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-in`, body);
}
function getRegistries() {
  return axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/registries`,
    config()
  );
}
function sendRegistry(body) {
  return axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/registries`,
    body,
    config()
  );
}
function deleteRegistry(idRegistry) {
  return axios.delete(
    `${process.env.REACT_APP_API_BASE_URL}/registries/${idRegistry}`,
    config()
  );
}
function updateRegistry(idRegistry, body) {
  return axios.put(
    `${process.env.REACT_APP_API_BASE_URL}/registries/${idRegistry}`,
    body,
    config()
  );
}
function deleteSession() {
  return axios.delete(
    `${process.env.REACT_APP_API_BASE_URL}/session`,
    config()
  );
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
