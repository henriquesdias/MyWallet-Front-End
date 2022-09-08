import axios from "axios";
function signUp(body) {
  return axios.post("http://localhost:5000/sign-up", body);
}
function signIn(body) {
  return axios.post("http://localhost:5000/sign-in", body);
}
export { signUp, signIn };
