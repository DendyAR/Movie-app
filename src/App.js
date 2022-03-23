import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/watch" element={<Watch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
