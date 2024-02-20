import InViewAnimate from './InViewAnimate';

interface ServiceProps {
  service: { h3: string; text: string | string[]; imgSrc: string };
}
// new services
function Service({ service }: ServiceProps) {
  const renderParagraph = () => {
    if (Array.isArray(service.text)) {
      return service.text.map((text) => {
        return <p key={text}>{text}</p>;
      });
    } else {
      return <p>{service.text}</p>;
    }
  };

  return (
    <div className="service">
      <article className="service-content">
        <InViewAnimate>
          <h3 className="h3">{service.h3}</h3>
        </InViewAnimate>
        <InViewAnimate>{renderParagraph()}</InViewAnimate>
      </article>
      <InViewAnimate className="service-image-wrapper">
        <img
          className="service-image"
          src={service.imgSrc}
          alt="service picture"
        />
      </InViewAnimate>
    </div>
  );
}

export default Service;
