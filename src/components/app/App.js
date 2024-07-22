import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../header/Header";
import Home from "../home/Home";
import Login from "../login/Login";
import Register from "../register/Register";
import Profile from "../profile/Profile";
import Users from "../profile/Users";
import Pm from "../posts/Pm";
function App() {
  return (
    <div className="App">
       <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/:id" element={<Profile/>}/>
          <Route path="/pm/:id" element={<Pm/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
