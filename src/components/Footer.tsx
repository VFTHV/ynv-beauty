import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';
import '../styles/footer.css';

function Footer() {
  const scrollProps = {
    spy: true,
    smooth: 'easeInOutQuint',
    duration: 1600,
  };

  return (
    <footer className="footer">
      <div className="logo-wrapper">
        <div className="logo">
          <img src={'logo.png'} alt="YnV Company Logo" />
        </div>
      </div>
      <nav className="footer-nav">
        <div className="navlink-wrapper">
          <Link to="home" {...scrollProps}>
            Home
          </Link>
        </div>
        <div className="navlink-wrapper">
          <Link to="about" {...scrollProps}>
            About
          </Link>
        </div>
        <div className="navlink-wrapper">
          <Link to="services" {...scrollProps}>
            Services
          </Link>
        </div>
      </nav>
      <div className="contact-info">
        <address>
          15315 Southwest Freeway, Suite QZ4 Sugar Land, TX, 77478
        </address>
        <div className="mob-email">
          <a href="mailto: info@ynv-beauty.com">info@ynv-beauty.com</a>
          <span> | </span>
          <a href="tel:+19793270505">M: +1 979 327 05 05</a>
        </div>
      </div>
      <div className="contact-info">
        <a href="https://www.facebook.com/">
          <FaFacebookF className="s-media-icon" />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram className="s-media-icon" />
        </a>
      </div>
      <div className="copyright">© YnV Beauty. All Rights Reserved 2022</div>
    </footer>
  );
}

export default Footer;
