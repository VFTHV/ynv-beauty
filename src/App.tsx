import About from './components/About';
import BookNow from './components/BookNow';
import Home from './components/Home';
import Services from './components/Services';
import { RxHamburgerMenu } from 'react-icons/rx';
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from 'react-icons/hi';
import SubmitForm from './components/SubmitForm';

function App() {
  return (
    <div className="container">
      <section className="home">
        <header>
          <div>
            <img src={'../public/logo.png'} alt="" />
          </div>
          <RxHamburgerMenu />
        </header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Book Now</a>
            </li>
          </ul>
        </nav>
      </section>
      <section className="about">
        <div>
          <img src={'../public/logo.png'} alt="" />
        </div>
        <h1>An Incredibl SPa Experience in Sugar Land, Tx</h1>
        <article>
          <p>
            Our licensed professionals build specific treatment program for
            every guest.
          </p>
          <p>
            We use only newest equipment and high quality medical products. Feel
            yourself special with our individual approach!
          </p>
          <p>YnV Beauty is a Luxury Oasis for Your Skin!!!</p>
        </article>
      </section>
      <section className="services">
        <div className="service">
          <h2>Classic Facial</h2>
          <article>
            For a deeper clean, this purifying treatment includes a double
            exfoliating peel and a gentle botanical deep-cleansing mask to
            rejuvenate the skin, improve cell turnover, and minimize pores. 60
            minutes
          </article>
          <img src="" alt="" />
        </div>
      </section>
      <footer>
        <h1>Get in Touch With Us And We'll Help Your Skin!</h1>
        <h3>
          Interested in our spa services? We want your spa experience to be a
          memorable one.
        </h3>
        <h2>Image Salon Studios</h2>
        <div className="contacts">
          <div className="contact">
            <HiOutlineLocationMarker />
            <address>
              15315 Southwest Freeway, Suite QZ4 Sugar Land, TX, 77478
            </address>
          </div>
          <div className="contact">
            <HiOutlinePhone />
            <a href="tel:+19793270505">+1 979 327 05 05</a>
          </div>
          <div className="contact">
            <HiOutlineMail />
            <a href="mailto: info@ynv-beauty.com">info@ynv-beauty.com</a>
          </div>
        </div>
        <SubmitForm />
      </footer>
    </div>
  );
}

export default App;
