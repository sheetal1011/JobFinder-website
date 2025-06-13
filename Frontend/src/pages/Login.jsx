import "./Login.css";
import loginimg from "../assets/image4.png";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">

        <div className="login-left">
          <img src={loginimg} alt="Welcome Back" />
        </div>

        <div className="login-right">
          <h2>Login</h2>
          <div className="input-group">
        <span className="input-icon"><i class="fa-solid fa-envelope"></i></span>
        <input type="email" placeholder="Email Address" />
      </div>

      <div className="input-group">
        <span className="input-icon"><i class="fa-solid fa-lock"></i></span>
        <input type="password" placeholder="Password" />
      </div>

      <div className="login-options">
        <label>
          <input type="checkbox" /> Remember Me
        </label>
        <a href="/forgot-password">Forgot Password?</a>
      </div>
          <button className="loginform-btn">Sign In</button>
          <p>
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
