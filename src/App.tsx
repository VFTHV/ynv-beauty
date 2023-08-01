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
      <About />
      <Services />
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
