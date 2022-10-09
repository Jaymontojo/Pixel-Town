import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// import { useContext } from 'react';
// import { AuthContext } from "./context/AuthContext";
// import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const { user } = useContext(AuthContext);
  // const navigate = useNavigate();
  // console.log(user)
  // if (user) return navigate('/register');
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <h1>Home</h1> }></Route>
        <Route path="/login" element={ <Login /> }></Route>
        <Route path="/register" element={ <Register /> }></Route>
      </Routes>
    </Router>
  )
}

export default App;
