import { RxHamburgerMenu } from 'react-icons/rx';

function Home() {
  return (
    <section id="home" className="home container">
      <header className="header">
        <div className="logo">
          <img src={'/logo.png'} alt="" />
        </div>
        <RxHamburgerMenu color="white" size={30} className="menu" />
      </header>
      <nav className="nav-head">
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
      </nav>
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
