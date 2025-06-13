import './Footer.css';

const Footer = () =>{
    return(
         <footer className="footer">
  <div className="footer-container">
    <div className="footer-section about">
      <h3>JobFinder</h3>
      <p>💖Your trusted platform for finding the best jobs across the globe. Easy. Fast. Reliable.</p>
    </div>

    <div className="footer-section links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/browse-jobs">Browse Jobs</a></li>
        <li><a href="/post-job">Post a Job</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>

    <div className="footer-section contact">
      <h4>Contact</h4>
      <p>Email: support@jobfinder.com</p>
      <p>Phone: +91-9876543210</p>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} JobFinder. All rights reserved.</p>
  </div>
</footer>

    )
}

export default Footer;