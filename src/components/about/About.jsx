import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { BiGitBranch } from "react-icons/bi";
import { MdSchool } from "react-icons/md";

const About = () => {
  const paragraph =
    "As a consultant and Scrum Master at Autumn Leaf IT, I guide multiple teams through the challenges of digital product development. I’m all about creating focus, clearing roadblocks, and helping projects move from ideas to successful launches. My job is about more than just ticking boxes—I'm here to mentor teams, streamline processes, and make sure we're always learning and improving together. I love turning complex goals into clear, manageable steps and seeing our collective efforts come to life.";

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
              <small>4+ Years</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon"></FaUsers>
              <h5>Projects Impacted</h5>
              <small>7+ Projects</small>
            </article>
            <article className="about__card">
              <BiGitBranch className="about__icon"></BiGitBranch>
              <h5>Sprints Completed</h5>
              <small>200+ Completed</small>
            </article>
          </div>
          <p>{paragraph}</p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
