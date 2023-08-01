import '../styles/services.css';
import { content } from '../assets/content';
import Service from './Service';

function Services() {
  const { classicFacial } = content.services;
  return (
    <section id="services" className="services container">
      <Service service={classicFacial} imgSrc="/classic_facial_small.jpg" />
    </section>
  );
}

export default Services;
