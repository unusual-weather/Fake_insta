import {
  HashRouter as BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/Index";
import PasswdPage from "./components/views/PasswdPage/PasswdPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage"


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        안녕
      </div>
      <Routes>
        <Route exact path="/login" element = {<LoginPage/>}/>
        <Route exact path="/passwd" element = {<PasswdPage/>}/>
        <Route exact path="/register" element = {<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
