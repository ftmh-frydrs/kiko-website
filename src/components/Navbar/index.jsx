import Icon from "../Icon";
import "./style.css";

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
          <Icon className="nav-icon" type="map" color="#FFFF" size={24} />
          <Icon className="nav-icon" type="heart" color="#FFFF" size={24} />
          <Icon className="nav-icon" type="user" color="#FFFF" size={24} />
          <Icon className="nav-icon" type="bag" color="#FFFF" size={24} />
        </div>
      </div>
      <div>
        <ul className="nav-ul">
          <li>Make-Up</li>
          <li>Hautpflege</li>
          <li>Accessoires</li>
          <li>Neuigkeiten</li>
          <li>Angebote</li>
          <li>Dienstleistungen</li>
          <li>Bestsellerc</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
