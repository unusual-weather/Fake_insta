import {
  HashRouter as
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/Index";
import PasswdPage from "./components/views/PasswdPage/PasswdPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element = {<LandingPage/>}/>
        <Route exact path="/login" element = {<LoginPage/>}/>
        <Route exact path="/passwd" element = {<PasswdPage/>}/>
        <Route exact path="/register" element = {<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
