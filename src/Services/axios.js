import axios from "axios";
function signUp(body) {
  return axios.post("http://localhost:5000/sign-up", body);
}
export { signUp };
