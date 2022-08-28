import "./footer.css";
import {FaFacebookF} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import {SiWhatsapp} from "react-icons/si";

const Footer = () => {
  return (
    <footer>
        <a href="#" className="footer__logo">
          Nicholas Kuün
        </a>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonails</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="footer__socials">
          <a href="https://"><SiWhatsapp></SiWhatsapp></a>
          <a href="https://"><FaLinkedinIn></FaLinkedinIn></a>
          <a href="https://"><FaFacebookF></FaFacebookF></a>
        </div>
 
    </footer>
  );
};

export default Footer;
