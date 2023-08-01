interface ServiceProps {
  service: { h3: string; text: string };
  imgSrc: string;
}

function Service({ service, imgSrc }: ServiceProps) {
  return (
    <div className="service">
      <article className="service-content">
        <h3 className="h3">{service.h3}</h3>
        <p>{service.text}</p>
      </article>
      <img className="service-image" src={imgSrc} alt="" />
    </div>
  );
}

export default Service;
