import SignUp from "./Pages/Sign-up";
import SignIn from "./Pages/Sign-in";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetStyle from "../Styles/reset";
import BodyStyle from "../Styles/body";
import PrincipalPage from "./Pages/Principal-Page";
import NewEntry from "./Pages/ NewEntry";
import NewOutput from "./Pages/NewOutput";
import UserContext from "./context/userContext";
import { useState } from "react";
function App() {
  const [user, setUser] = useState(null);
  if (localStorage.getItem("user") !== null && user === null) {
    const user = JSON.parse(localStorage.getItem("user"));
    delete user.password;
    setUser(user);
  }
  return (
    <BrowserRouter>
      <ResetStyle />
      <BodyStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/principal-page" element={<PrincipalPage />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/new-entry" element={<NewEntry />}></Route>
          <Route path="/new-output" element={<NewOutput />}></Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
