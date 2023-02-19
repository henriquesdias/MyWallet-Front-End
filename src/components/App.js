import SignUp from "../pages/Sign-up";
import SignIn from "../pages/Sign-in";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetStyle from "../styles/reset";
import BodyStyle from "../styles/body";
import PrincipalPage from "../pages/Principal-Page";
import NewEntry from "../pages/ New-Entry";
import NewOutput from "../pages/New-Output";
import UserContext from "../context/userContext";
import { useState } from "react";
import EntryUpdate from "../pages/Entry-Update";
import OutputUpdate from "../pages/Output-Update";

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
          <Route path="/entry-update" element={<EntryUpdate />}></Route>
          <Route path="/output-update" element={<OutputUpdate />}></Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
