import "./nav.css";
import { FaHome } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa";
import { BsBookFill } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiFillPhone } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" className={activeNav === "#" ? "active" : ""} onClick={() => {setActiveNav("#")}}>
        <FaHome></FaHome>
      </a>
      <a href="#about" onClick={() => {setActiveNav("#about")}}  className={activeNav === "#about" ? "active" : ""}>
        <FaUserAstronaut></FaUserAstronaut>
      </a>
      <a href="#experience" onClick={() => {setActiveNav("#experience")}}  className={activeNav === "#experience" ? "active" : ""}>
        <BsBookFill></BsBookFill>
      </a>
      <a href="#services" onClick={() => {setActiveNav("#services")}}  className={activeNav === "#services" ? "active" : ""}>
        <RiCustomerService2Fill></RiCustomerService2Fill>
      </a>
      <a href="#contact" onClick={() => {setActiveNav("#contact")}}  className={activeNav === "#contact" ? "active" : ""}>
        <AiFillPhone></AiFillPhone>
      </a>
    </nav>
  );
};

export default Nav;
