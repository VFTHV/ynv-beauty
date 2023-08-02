import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from 'react-icons/hi';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import SubmitForm from './SubmitForm';
import '../styles/contact_us.css';

function ContactUs() {
  return (
    <section className="contact-us container" id="contact-us">
      <div className="contact-details">
        <h2 className="h2">Get in Touch With Us And We'll Help Your Skin!</h2>
        <h5 className="h5">
          Interested in our spa services? We want your spa experience to be a
          memorable one.
        </h5>
        <h4 className="h4">Image Salon Studios</h4>
        <div className="contacts">
          <div className="contact">
            <HiOutlineLocationMarker className="contact-icon" />
            <address>
              <a href="https://www.google.com/maps/place/Image+Salon+Studios+at+Sugar+Land/@29.6033509,-95.6120836,17z/data=!3m1!4b1!4m6!3m5!1s0x8640e6edf1f139cd:0xe9500a21f53682b5!8m2!3d29.6033509!4d-95.6120836!16s%2Fg%2F1td7cjp5?entry=ttu">
                15315 Southwest Freeway, Suite QZ4 Sugar Land, TX, 77478
              </a>
            </address>
          </div>
          <div className="contact">
            <HiOutlinePhone className="contact-icon" />
            <a href="tel:+19793270505">+1 979 327 05 05</a>
          </div>
          <div className="contact">
            <HiOutlineMail className="contact-icon" />
            <a href="mailto: info@ynv-beauty.com">info@ynv-beauty.com</a>
          </div>
          <div className="contact">
            <a href="https://www.facebook.com/">
              <FaFacebookF className="s-media-icon" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram className="s-media-icon" />
            </a>
          </div>
        </div>
      </div>
      <SubmitForm />
    </section>
  );
}

export default ContactUs;
