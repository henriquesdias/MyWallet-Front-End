import axios from "axios";
function signUp(body) {
  return axios.post("http://localhost:5000/sign-up", body);
}
function signIn(body) {
  return axios.post("http://localhost:5000/sign-in", body);
}
function getTransitions(config) {
  return axios.get("http://localhost:5000/transitions", config);
}
export { signUp, signIn, getTransitions };
