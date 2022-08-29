import Typed from "react-typed";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello World, I'm</h5>
        <h1>Nicholas Kuün</h1>
        <Typed
          className="typed-text"
          strings={["Application Developer", "Software Engineer", "Web Designer", "Programming Enthusiast" , "Computer Scientist","Problem Solver"]}
          typedSpeed={10000}
          backSpeed={200}
          loop
        />
        <CTA></CTA>
        <HeaderSocials></HeaderSocials>
        <div className="me">
          <img src={ME} alt="me"></img>
        </div>
        <a href = "#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
