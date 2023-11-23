import aIcon from "./icons/a-solid.svg";
import kIcon from "./icons/k-solid.svg";
import eIcon from "./icons/e-solid.svg";
import cIcon from "./icons/c-solid.svg";

import "./footer.css";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-question">
          Interested in our team? Check us out!
        </div>
        <div className="footer-links">
          <div className="links">
            <a href="https://github.com/Anathretic">
              <img src={kIcon} alt="github-K" />
            </a>
          </div>
          <div className="links">
            <a href="https://github.com/onw90">
              <img src={aIcon} alt="github-A" />
            </a>
          </div>
          <div className="links">
            <a href="">
              <img src={eIcon} alt="github-E" />
            </a>
          </div>
          <div className="links">
            <a href="">
              <img src={cIcon} alt="github-C" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
