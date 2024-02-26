import Icon from "../Icon";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-content">
        <div className="nav-div-btn">
          <button className="nav-btn">
            <Icon type="search" color="#FFFF" size={24} />
          </button>
        </div>
        <div className="nav-logo">KIKO</div>
        <div className="nav-div-icon">
          <Icon className="nav-icon" type="map" color="#FFFF" size={28} />
          <Icon className="nav-icon" type="heart" color="#FFFF" size={28} />
          <Icon className="nav-icon" type="user" color="#FFFF" size={28} />
          <Icon className="nav-icon" type="bag" color="#FFFF" size={28} />
        </div>
      </div>
      <div>
        <ul className="nav-ul">
          <li>
            <Link to="/makeUp" className="menu">
              Make-Up
            </Link>
          </li>
          <li>
            <Link to="/hautpflege" className="menu">
              Hautpflege
            </Link>
          </li>
          <li>
            <Link to="/accessoires" className="menu">
              Accessoires
            </Link>
          </li>
          <li>
            <Link to="/neuigkeiten" className="menu">
              Neuigkeiten
            </Link>
          </li>
          <li>
            <Link to="/angebote" className="menu">
              Angebote
            </Link>
          </li>
          <li>
            <Link to="/dienstleistungen" className="menu">
              Dienstleistungen
            </Link>
          </li>
          <li>
            <Link to="/bestsellerc" className="menu">
              Bestsellerc
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
