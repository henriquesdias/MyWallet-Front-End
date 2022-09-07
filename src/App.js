import SignUp from "./Components/Pages/Sign-up";
import SignIn from "./Components/Pages/Sign-in";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetStyle from "./Styles/reset";
import BodyStyle from "./Styles/body";
function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <BodyStyle />
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/sign-up" element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
