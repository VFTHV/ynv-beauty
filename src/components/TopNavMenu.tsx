import { Link } from 'react-scroll';
import '../styles/top-nav-menu.css';

interface TopNavMenuProps {
  scrollProps: {
    spy: boolean;
    smooth: string;
    duration: number;
  };
}

function TopNavMenu({ scrollProps }: TopNavMenuProps) {
  return (
    <nav className="top-nav">
      <ul className="nav-items">
        <li>
          <Link className="nav-item" to="home" {...scrollProps}>
            HOME
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="about" {...scrollProps}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="services" {...scrollProps}>
            SERVICES
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopNavMenu;
