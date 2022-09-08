import axios from "axios";
function signUp(body) {
  return axios.post("http://localhost:5000/sign-up", body);
}
function signIn(body) {
  return axios.post("http://localhost:5000/sign-in", body);
}
function getRegistries(config) {
  return axios.get("http://localhost:5000/registries", config);
}
function sendRegistry(body, config) {
  return axios.post("http://localhost:5000/registries", body, config);
}
export { signUp, signIn, getRegistries, sendRegistry };
