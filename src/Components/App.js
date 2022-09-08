import SignUp from "./Pages/Sign-up";
import SignIn from "./Pages/Sign-in";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetStyle from "../Styles/reset";
import BodyStyle from "../Styles/body";
import PrincipalPage from "./Pages/Principal-Page";
import NewEntry from "./Pages/ NewEntry";
function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <BodyStyle />
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/principal-page" element={<PrincipalPage />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/new-entry" element={<NewEntry />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
