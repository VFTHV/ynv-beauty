import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiOutlineMenu } from 'react-icons/hi';
import '../styles/home.css';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavMounted, setIsNavMounted] = useState(false);

  const navRef = useRef<HTMLElement | null>(null);
  const burgerMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsNavMounted(true);
  }, []);
  useEffect(() => {
    const closeMenuOnClickOutside = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        navRef.current &&
        !navRef.current.contains(e.target as Node) &&
        burgerMenuRef.current &&
        !burgerMenuRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', closeMenuOnClickOutside);
    return () => {
      document.removeEventListener('mousedown', closeMenuOnClickOutside);
    };
  }, [isMenuOpen]);

  let navWidth = 224;

  if (navRef.current) {
    navWidth = navRef.current.getBoundingClientRect().width;
  }

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  return (
    <section id="home" className="home container">
      <header className="header">
        <div className="logo">
          <img src={'/logo.png'} alt="" />
        </div>
        <div className="menu" ref={burgerMenuRef}>
          <HiOutlineMenu color="white" size={35} onClick={handleMenuToggle} />
        </div>
      </header>
      <motion.nav
        className="nav-head"
        animate={{
          x: isMenuOpen ? navWidth : 0,
        }}
        transition={{ ease: 'easeInOut' }}
        ref={navRef}
      >
        <ul className="nav-items">
          <li>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className="nav-item"
              to=""
              spy={true}
              smooth={true}
              duration={500}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className="nav-item"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsMenuOpen(false)}
              className="nav-item"
              to="services"
              spy={true}
              smooth={true}
              duration={500}
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="contact-us"
              spy={true}
              smooth={true}
              duration={500}
              className="cta-btn"
            >
              BOOK NOW!
            </Link>
          </li>
        </ul>
      </motion.nav>
      <div className="home-content">
        <h1 className="h1">YnV Beauty</h1>
        <div className="cta-container">
          <Link
            className="cta-btn2"
            to="contact-us"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => console.log('clicked Book Now')}
          >
            <div className="btn-text">Book Now</div>
            <div className="button-background"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
