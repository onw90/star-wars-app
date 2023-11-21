import "./footer.css";
import githubIcon from "./github.svg";
import linkedinIcon from "./linkedin.svg";
export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-question">
          Interested in our team? Check us out!
        </div>
        <div className="footer-links">
          <div className="footer-links-who">
            <p>Konrad</p>
            <div className="links">
              <a href="https://github.com/Anathretic">
                <img src={githubIcon} alt="github-icon" />
              </a>
              <a href="https://www.linkedin.com/in/konrad-wojtylo/">
                <img src={linkedinIcon} alt="linkedin-icon" />
              </a>
            </div>
          </div>

          <div className="footer-links-who">
            <p>Ola</p>
            <div className="links">
              <a href="https://github.com/onw90">
                <img src={githubIcon} alt="github-icon" />
              </a>
              <a href="https://www.linkedin.com/in/waniczekaleksandra/">
                <img src={linkedinIcon} alt="linkedin-icon" />
              </a>
            </div>
          </div>

          
          {/* <a href="">github-Edyta</a>
          <a href=" ">linkedin-Edyta</a>
          <a href="">github-Czarek</a>
          <a href="">linkedin-Czarek</a> */}
        </div>{" "}
      </div>
    </footer>
  );
};
