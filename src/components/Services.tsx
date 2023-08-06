import { Fragment } from 'react';
import '../styles/services.css';
import { services } from '../assets/content';
import Service from './Service';

function Services() {
  return (
    <section id="services" className="services">
      <div className="wrapper">
        {services.map((service) => (
          <Service key={service.h3} service={service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
