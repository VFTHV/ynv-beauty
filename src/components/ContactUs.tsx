import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from 'react-icons/hi';
import SubmitForm from './SubmitForm';
import '../styles/contact_us.css';

function ContactUs() {
  return (
    <section className="contact-us container" id="contact-us">
      <h2 className="h2">Get in Touch With Us And We'll Help Your Skin!</h2>
      <h5 className="h5">
        Interested in our spa services? We want your spa experience to be a
        memorable one.
      </h5>
      <h4 className="h4">Image Salon Studios</h4>
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
    </section>
  );
}

export default ContactUs;
