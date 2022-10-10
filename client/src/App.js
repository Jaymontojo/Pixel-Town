import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";
// import { useContext } from 'react';
// import { AuthContext } from "./context/AuthContext";
// import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Register /> }></Route>
        <Route path="/login" element={ <Login /> }></Route>
        <Route path="/register" element={ <Register /> }></Route>
        <Route path="/messenger" element={ <Messenger /> }></Route>messenger
      </Routes>
    </Router>
  )
}

export default App;
