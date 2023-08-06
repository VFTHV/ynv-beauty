import { Link } from 'react-scroll';
import '../styles/book-now.css';

interface BookNowProps {
  scrollProps: {
    spy: boolean;
    smooth: string;
    duration: number;
  };
}

function BookNow({ scrollProps }: BookNowProps) {
  return (
    <div className="cta-container">
      <Link className="cta-btn2" to="contact-us" {...scrollProps}>
        <div className="btn-text">Book Now</div>
        <div className="button-background"></div>
      </Link>
    </div>
  );
}

export default BookNow;
