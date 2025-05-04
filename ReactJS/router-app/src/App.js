import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/home";
import Aboutus from "./Components/aboutus";
import Contactus from "./Components/contactus";
import Addon from "./Components/Addon";
import LoginForm from "./Components/LoginForm";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Component </Link> &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/home">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/aboutus">About Us</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/contactus">Contact Us</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/login">Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/Addon">Addon</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/contactus" element={<Contactus />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/addon" element={<Addon />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
