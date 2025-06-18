import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Browsejobs from './pages/Browsejobs';
import JobSeekerDashboard from './pages/jobseekerDashboard';
import RecruiterDashboard from './pages/recruiterDashboard';
import PostJob from './pages/PostJob';
import AppliedJobs from './pages/AppliedJobs';

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
     <Route path="/jobseeker-dashboard" element={<JobSeekerDashboard />} />
     <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
     <Route path="/post-job" element={<PostJob />} />
     <Route path="/applied-jobs" element={<AppliedJobs />} />
     </Routes>
    </Router>
    </>
  )
}

export default App
