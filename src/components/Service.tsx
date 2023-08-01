interface ServiceProps {
  service: { h3: string; text: string | string[]; imgSrc: string };
}

function Service({ service }: ServiceProps) {
  const renderParagraph = () => {
    if (typeof service.text === 'object') {
      return service.text.map((text) => {
        return <p>{text}</p>;
      });
    } else {
      return <p>{service.text}</p>;
    }
  };

  return (
    <div className="service">
      <article className="service-content">
        <h3 className="h3">{service.h3}</h3>
        {renderParagraph()}
      </article>
      <img className="service-image" src={service.imgSrc} alt="" />
    </div>
  );
}

export default Service;
