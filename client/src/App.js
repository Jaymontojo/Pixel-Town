import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Login /> }></Route>
        <Route path="/login" element={ <Login /> }></Route>
        {/* <Route exact path="/" element={ <Register /> }></Route> */}
        {/* <Route path="/register" element={ <Register /> }></Route> */}
        <Route path="/messenger" element={ <Messenger /> }></Route>messenger
      </Routes>
    </Router>
  )
}

export default App;
