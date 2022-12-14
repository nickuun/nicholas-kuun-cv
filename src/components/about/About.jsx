import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { BiGitBranch } from "react-icons/bi";
import { MdSchool } from "react-icons/md";

const About = () => {
  const paragraph =
    "I am currently working as an Associate Application Developer at Autumn Leaf IT. I am humbled by the fact that there is always so much more for me to learn; I strive for an an environment that fosters this sort of attainment.\n I love working collectively as a team, deligating actions to make daunting tasks seem effortless.";
  return (
    <section id="about">
      <h5>Get To Know A Little More</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdSchool className="about__icon"></MdSchool>
              <h5>Qualification</h5>
              <small>Computer Science Degree </small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon"></FaAward>
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon"></FaUsers>
              <h5>Clients</h5>
              <small>3+ Clients</small>
            </article>
            <article className="about__card">
              <BiGitBranch className="about__icon"></BiGitBranch>
              <h5>Tickets</h5>
              <small>50+ Completed</small>
            </article>
          </div>
          <p>
           {paragraph}
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
