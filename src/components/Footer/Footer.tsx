import { FC } from "react";
import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer>
      <div className="footer-links">
        <a
          href="https://github.com/shuklashikhar"
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
        >
          <FaGithub className="footer-icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/shikhar-shukla-03676524a/"
          target="_blank"
          rel="noreferrer"
          aria-label="Linkedin"
        >
          <FaLinkedin className="footer-icon" />
        </a>

        <a
          href="mailto:shuklashikhar2004@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Email"
        >
          <FaEnvelope className="footer-icon" />
        </a>

        <a
          href="https://github.com/shuklashikhar/BookStackr"
          target="_blank"
          rel="noreferrer"
          aria-label="Source code"
        >
          <FaCode className="footer-icon" />
        </a>
      </div>

      <hr />

      <div>
        <span>Developed by </span>
        <a target="_blank" rel="noopener noreferrer">
          Shikhar Shukla
        </a>
      </div>
    </footer>
  );
};

export default Footer;
