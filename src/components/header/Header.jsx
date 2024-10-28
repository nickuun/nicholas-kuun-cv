import Typed from "react-typed";
import "./header.css";
import CTA from "./CTA";
// import ME from "../../assets/me.png";
import ME from "../../assets/HeroImage.png";


import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello World, I'm</h5>
        <h1>Nicholas Kuün</h1>
        <Typed
          className="typed-text"
          strings={[
            "Scrum Sensei",
            "Project Mentor",
            "Team Empowerer",
            "Agile Enthusiast",
            "Problem Solver",
            "Sprint Whisperer",
            "Squad Cheerleader",
            "Roadblock Remover",
            "Backlog Guardian",
            "Efficiency Engineer",
            "Collaboration Champion",
            "Agile Maestro",
            "Process Optimizer"
          ]}
          typeSpeed={100} // Speed of typing per character
          backSpeed={50} // Speed of backspace per character
          // startDelay={100} 
          // backDelay={200}
          loop
        />
        <CTA></CTA>
        <HeaderSocials></HeaderSocials>
        <div className="me">
          <img src={ME} alt="me"></img>
        </div>
        {/* <a href = "#" className="scroll_down">Scroll Up?</a> */}
      </div>
    </header>
  );
};

export default Header;
