import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';
import '../styles/footer.css';
import InViewAnimate from './InViewAnimate';

function Footer() {
  const scrollProps = {
    spy: true,
    smooth: 'easeInOutQuint',
    duration: 1600,
  };

  return (
    <footer className="footer">
      <InViewAnimate>
        <div className="logo-wrapper">
          <div className="logo">
            <img src={'logo.png'} alt="YnV Company Logo" />
          </div>
        </div>
      </InViewAnimate>
      <InViewAnimate>
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
      </InViewAnimate>
      <InViewAnimate>
        <div className="contact-info">
          <address>
            12345 Southwest Freeway, Suite ABC Sugar Land, TX, 77479
          </address>
          <div className="mob-email">
            <a href="mailto: info@ynv-beauty.com">info@ynv-beauty.com</a>
            <span> | M: </span>
            <a href="tel:+11234567890">+1 123 456 78 90</a>
          </div>
        </div>
      </InViewAnimate>
      <InViewAnimate>
        <div className="contact-info">
          <a href="https://www.facebook.com/">
            <FaFacebookF className="s-media-icon" />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram className="s-media-icon" />
          </a>
        </div>
      </InViewAnimate>
      <div className="copyright">© YnV Beauty. All Rights Reserved 2022</div>
    </footer>
  );
}

export default Footer;
