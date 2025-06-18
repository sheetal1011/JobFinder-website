import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginimg from "../assets/image4.png";
import axios from "axios";

const Login = () => {
   const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      const { token, role, name } = res.data;
      // Step 1: Save data in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify({token, name, role }));

      // Step 2: Show welcome message
      alert(`Welcome ${name}, you are logged in as a ${role}`);

      // Step 3: Redirect based on role
      if (role === "recruiter") {
        navigate("/recruiter-dashboard");
      } else {
        navigate("/jobseeker-dashboard");
      }
    } catch (err) {
      alert("Invalid credentials or something went wrong.");
      console.error(err);
    }
  };


  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <img src={loginimg} alt="Welcome Back" />
        </div>

        <div className="login-right">
          <h2>Login</h2>

          <div className="input-group">
            <span className="input-icon">
              <i class="fa-solid fa-envelope"></i>
            </span>
            <input type="email" placeholder="Email Address"  value={email}
              onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className="input-group">
            <span className="input-icon">
              <i class="fa-solid fa-lock"></i>
            </span>
            <input type="password" placeholder="Password"  value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <button className="loginform-btn" onClick={handleLogin}>Sign In</button>
          <p>
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
