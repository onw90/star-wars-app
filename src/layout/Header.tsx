import "./header.css";
import planetIcon from "./icons/planet.png";
import userIcon from "./icons/user-astronaut-solid.svg";
import homeIcon from "./icons/earth-africa-solid.svg";
import logoutIcon from "./icons/logout.svg";
import changePlanetIcon from "./icons/rocket-solid.svg";

export const Header: React.FC = () => {
  return (
    <header>
      <div className="header-container">
        
        <div className="header-name"><img src={planetIcon} alt="planet-icon" /><h1 className="header-h1">Star Wars Planet</h1></div>
        <div className="header-buttons">
          <button>
            <img src={logoutIcon} alt="logout" />
          </button>
          <button>
            <img src={homeIcon} alt="home" />
          </button>
          <button>
            <img src={userIcon} alt="user" />
          </button>
          <button>
            <img src={changePlanetIcon} alt="change-planet" />
          </button>
        </div>
      </div>
    </header>
  );
};
