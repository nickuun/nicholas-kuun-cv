import {BsLinkedin} from "react-icons/bs"; 
import {FaGithubAlt} from "react-icons/fa"; 
import {BsWhatsapp} from "react-icons/bs"; 

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank"><BsLinkedin></BsLinkedin></a>
      <a href="https://github.com" target="_blank"><FaGithubAlt></FaGithubAlt></a>
      <a href="https://web.whatsapp.com/" target="_blank"><BsWhatsapp></BsWhatsapp></a>
    </div>
  );
};

export default HeaderSocials;
