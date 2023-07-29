import Home from './components/Home';
import About from './components/About';
import BookNow from './components/BookNow';
import Services from './components/Services';
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from 'react-icons/hi';
import SubmitForm from './components/SubmitForm';

function App() {
  return (
    <div className="">
      <Home />
      <section id="about" className="about">
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
      <section id="services" className="services">
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
      <footer id="footer">
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
