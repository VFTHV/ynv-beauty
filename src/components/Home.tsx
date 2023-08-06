import { useState, useRef } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import '../styles/home.css';
import SideMenu from './SideMenu';
import BookNow from './BookNow';
import TopNavMenu from './TopNavMenu';

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
          <BookNow scrollProps={scrollProps} />
        </div>
      </header>
      <TopNavMenu scrollProps={scrollProps} />

      <SideMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        burgerMenuRef={burgerMenuRef}
        scrollProps={scrollProps}
      />
      <div className="home-content">
        <h1 className="h1">YnV Beauty</h1>
        <BookNow scrollProps={scrollProps} />
      </div>
    </section>
  );
}

export default Home;
