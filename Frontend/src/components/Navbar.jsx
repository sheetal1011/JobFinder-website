import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Fetch user info from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <Link to="/browse-jobs" onClick={() => setMenuOpen(false)}>
            Jobs
          </Link>
          <Link to="/browse-companies" onClick={() => setMenuOpen(false)}>
            Companies
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>

      <div className="nav-center">
        <Link to="/" className="logo">
          💼 JobFinder
        </Link>
      </div>

      <div className="nav-right">
        {user ? (
          <div
            className="user-dropdown"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <span className="user-name">
              👩🏻 {user.name.split(" ")[0]}
              <i className="fa-solid fa-chevron-down arrow-icon"></i>
            </span>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <p>Role: {user.role}</p>
                <Link
                  to={
                    user.role === "recruiter"
                      ? "/recruiter-dashboard"
                      : "/jobseeker-dashboard"
                  }
                  className="dropdown-link"
                  onClick={() => setDropdownOpen(false)}
                >
                  🧭 Dashboard
                </Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="btn login-btn"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn register-btn"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
