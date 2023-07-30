import { motion } from 'framer-motion';
import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavMounted, setIsNavMounted] = useState(false);

  const navRef = useRef<HTMLElement | null>(null);
  const burgerMenuRef = useRef(null);

  useEffect(() => {
    setIsNavMounted(true);
  }, []);

  useEffect(() => {
    const closeMenuOnClickOutside = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        navRef.current &&
        !navRef.current.contains(e.target as Node)
      ) {
        console.log(e.target);
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
        <RxHamburgerMenu
          color="white"
          size={30}
          className="menu"
          onClick={handleMenuToggle}
        />
      </header>
      <motion.nav
        className="nav-head"
        animate={{
          x: isMenuOpen ? navWidth : 0,
        }}
        ref={navRef}
      >
        <ul className="nav-items">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#services">SERVICES</a>
          </li>
          <li>
            <a className="cta-btn" href="#footer">
              BOOK NOW!
            </a>
          </li>
        </ul>
      </motion.nav>
      <div className="home-content">
        <h1 className="h1">YnV Beauty</h1>
        <div className="cta-container">
          <a className="cta-btn2" href="#footer"></a>
          <div className="btn-text">BOOK NOW</div>
          <div className="button-background"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
