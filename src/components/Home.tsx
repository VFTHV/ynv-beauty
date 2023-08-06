import { useState, useRef } from 'react';
import { Link } from 'react-scroll';
import { HiOutlineMenu } from 'react-icons/hi';
import '../styles/home.css';
import SideMenu from './SideMenu';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement | null>(null);

  const scrollProps = {
    spy: true,
    smooth: 'easeInOutQuint',
    duration: 1600,
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  return (
    <section id="home" className="home container">
      <header className="header">
        <div className="logo">
          <img src={'logo.png'} alt="YnV Company Logo" />
        </div>
        <div className="menu" ref={burgerMenuRef}>
          <HiOutlineMenu
            className="menu-icon"
            color="white"
            size={35}
            onClick={handleMenuToggle}
          />
          <div className="cta-container">
            <Link className="cta-btn2" to="contact-us" {...scrollProps}>
              <div className="btn-text">Book Now</div>
              <div className="button-background"></div>
            </Link>
          </div>
        </div>
      </header>
      <SideMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        burgerMenuRef={burgerMenuRef}
        scrollProps={scrollProps}
      />
      <div className="home-content">
        <h1 className="h1">YnV Beauty</h1>
        <div className="cta-container">
          <Link className="cta-btn2" to="contact-us" {...scrollProps}>
            <div className="btn-text">Book Now</div>
            <div className="button-background"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
