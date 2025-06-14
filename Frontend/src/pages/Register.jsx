import React , {useState} from "react";
import "./Register.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import registerleft from "../assets/image4.png";

const Register = () => {

   const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "jobseeker",
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // send data to backend
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);
      alert(res.data.message); // show success
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-left">
          <img src={registerleft} alt="Join Us" />
        </div>

        <div className="register-right">
          <h2>Create Account</h2>

          <form onSubmit={handleSubmit}>
          <div className="input-group">
            <i className="fa-solid fa-user"></i>
            <input type="text" name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange} />
          </div>

          <div className="input-group">
            <i className="fa-solid fa-envelope"></i>
            <input type="email" name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange} />
          </div>

          <div className="input-group">
            <i className="fa-solid fa-lock"></i>
            <input type="password" name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange} />
          </div>

          <select name="role" className="register-select"  value={formData.role}
              onChange={handleChange}>
            <option value="jobseeker">Job Seeker</option>
            <option value="recruiter">Recruiter</option>
          </select>

          <button className="signup-btn">Sign Up</button>
          </form>

          <p>
            Already have an account? <a href="/login">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
