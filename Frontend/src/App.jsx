import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Browsejobs from './pages/Browsejobs';

function App() {
  return (
    <>
    <Router>
     <Navbar/>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/register" element={<Register />} />
     <Route path="/login" element={<Login />} />
     <Route path="/browse-jobs" element={<Browsejobs />} />
     </Routes>
    </Router>
    </>
  )
}

export default App
