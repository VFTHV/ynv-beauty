import '../styles/about.css';
import InViewAnimate from './InViewAnimate';
// to add item to about
// to add item to about
// to add item to about
// to add item to about

function About() {
  return (
    <section id="about" className="about container">
      <div className="logo-container">
        <div className="logo">
          <img src={'logo.png'} alt="" />
        </div>
      </div>
      <InViewAnimate>
        <h1 className="h2 about-content1">
          An Incredible Spa Experience in Sugar Land, Tx
        </h1>
      </InViewAnimate>
      <InViewAnimate>
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
      </InViewAnimate>
    </section>
  );
}

export default About;
