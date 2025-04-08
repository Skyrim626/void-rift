import { Link } from "react-router-dom";
import Button from "../Button";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Connect to the Void Beacon to receive encrypted coordinates and
          mission briefings.
        </p>
        <p className="footer-subscription-text">
          You may disengage transmission at any moment.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn__outline">Engage</Button>
          </form>
        </div>
      </section>

      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>The Codex</h2>
            <Link to="/sign-up">Initiation Protocol</Link>
            <Link to="/">Echoes of the Past</Link>
            <Link to="/">Guild Recruitment</Link>
            <Link to="/">Data Investors</Link>
            <Link to="/">Terms of Convergence</Link>
          </div>
          <div className="footer-link-items">
            <h2>Command Channel</h2>
            <Link to="/">Signal the Bridge</Link>
            <Link to="/">AI Support Unit</Link>
            <Link to="/">Galactic Nodes</Link>
            <Link to="/">Alliances & Factions</Link>
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Holologs</h2>
            <Link to="/">Upload Transmission</Link>
            <Link to="/">Operative Logs</Link>
            <Link to="/">Broadcast Agency</Link>
            <Link to="/">Influencer Matrix</Link>
          </div>
          <div className="footer-link-items">
            <h2>Neural Feeds</h2>
            <Link to="/">InstaVoid</Link>
            <Link to="/">FaceGrid</Link>
            <Link to="/">YouNexus</Link>
            <Link to="/">X-Twitter</Link>
          </div>
        </div>
      </div>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              VoidRift
              <i className="fas fa-meteor" />
            </Link>
          </div>
          <small className="website-rights">VoidRift Systems © 3047</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
