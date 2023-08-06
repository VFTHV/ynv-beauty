import { useState, useRef, useEffect, Dispatch, MutableRefObject } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import '../styles/side-menu.css';

interface SideMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<React.SetStateAction<boolean>>;
  burgerMenuRef: MutableRefObject<HTMLElement | null>;
  scrollProps: {
    spy: boolean;
    smooth: string;
    duration: number;
  };
}

function SideMenu({
  isMenuOpen,
  setIsMenuOpen,
  burgerMenuRef,
  scrollProps,
}: SideMenuProps) {
  const [_, setIsNavMounted] = useState(false);

  const navRef = useRef<HTMLElement | null>(null);

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

  return (
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
            to="home"
            {...scrollProps}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="nav-item"
            to="about"
            {...scrollProps}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsMenuOpen(false)}
            className="nav-item"
            to="services"
            {...scrollProps}
          >
            SERVICES
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setIsMenuOpen(false)}
            to="contact-us"
            {...scrollProps}
            className="cta-btn"
          >
            BOOK NOW!
          </Link>
        </li>
      </ul>
    </motion.nav>
  );
}

export default SideMenu;
