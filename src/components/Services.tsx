import '../styles/services.css';
import { services } from '../assets/content';
import Service from './Service';

function Services() {
  return (
    <section id="services" className="services container">
      {services.map((service) => (
        <Service service={service} />
      ))}
    </section>
  );
}

export default Services;
