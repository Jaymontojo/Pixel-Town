import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";

function App() {
  //return <Login/>
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
