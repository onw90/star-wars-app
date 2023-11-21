import "./header.css";
import planetIcon from "./planet.png";

export const Header: React.FC = () => {
  return (
    <header>
      <div className="header-container">
        <img src={planetIcon} alt="planet-icon" />
        <h1 className="header-name">Star Wars Planet</h1>
        <div className="header-buttons">
          {/* <button>Log out</button> 
		  <button>My planet</button>
		   <button>Me</button>*/}
        </div>
      </div>
    </header>
  );
};
