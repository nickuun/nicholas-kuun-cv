import {BsLinkedin} from "react-icons/bs"; 
import {FaGithubAlt} from "react-icons/fa"; 
import {BsWhatsapp} from "react-icons/bs"; 

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/nicholas-ku%C3%BCn-a2a1801a2/" target="_blank"><BsLinkedin></BsLinkedin></a>
      <a href="https://github.com/nickuun" target="_blank"><FaGithubAlt></FaGithubAlt></a>
      <a href="https://wa.me/+27813814274" target="_blank"><BsWhatsapp></BsWhatsapp></a>
    </div>
  );
};

export default HeaderSocials;
