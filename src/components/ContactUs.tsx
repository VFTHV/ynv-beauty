import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from 'react-icons/hi';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import SubmitForm from './SubmitForm';
import InViewAnimate from './InViewAnimate';
import '../styles/contact_us.css';

function ContactUs() {
  return (
    <section className="contact-us container" id="contact-us">
      <div className="contact-details">
        <InViewAnimate>
          <h2 className="h2">Get in Touch With Us And We'll Help Your Skin!</h2>
        </InViewAnimate>
        <InViewAnimate>
          <h5 className="h5">
            Interested in our spa services? We want your spa experience to be a
            memorable one.
          </h5>
        </InViewAnimate>
        <InViewAnimate>
          <h4 className="h4">Image Salon Studios</h4>
        </InViewAnimate>

        <div className="contacts">
          <div className="contact">
            <HiOutlineLocationMarker className="contact-icon" />
            <address>
              <a href="https://www.google.com/maps/place/Sugar+Land,+TX+77498/@29.6396917,-95.6907728,13z/data=!3m1!4b1!4m6!3m5!1s0x8640e0cbf1f0eacf:0x3297e7e0443a413c!8m2!3d29.6338457!4d-95.6563119!16s%2Fm%2F07nqc4r?entry=ttu">
                12345 Southwest Freeway, Suite ABC Sugar Land, TX, 77479
              </a>
            </address>
          </div>
          <div className="contact">
            <HiOutlinePhone className="contact-icon" />
            <a href="tel:+11234567890">+1 123 456 78 90</a>
          </div>
          <div className="contact">
            <HiOutlineMail className="contact-icon" />
            <a href="mailto: info@ynv-beauty.com">info@ynv-beauty.com</a>
          </div>
          <InViewAnimate>
            <div className="contact">
              <a href="https://www.facebook.com/">
                <FaFacebookF className="s-media-icon" />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram className="s-media-icon" />
              </a>
            </div>
          </InViewAnimate>
        </div>
      </div>
      <InViewAnimate>
        <SubmitForm />
      </InViewAnimate>
    </section>
  );
}

export default ContactUs;
