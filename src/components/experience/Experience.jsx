import "./experience.css";
import { FaRegCheckCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Industry Related</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Project Leadership</h3>
          <div className="experience__content">

            <article className="experience__details">
              <FaRegCheckCircle className="experience__details-icon"></FaRegCheckCircle>
              <div>
                <h4>Agile Methodologies:</h4>
                <small className="text-light">Extensive experience leading teams using Scrum, Kanban, and hybrid approaches.</small>
              </div>
            </article>
            <article className="experience__details">
              <FaRegCheckCircle className="experience__details-icon"></FaRegCheckCircle>
              <div>
                <h4>Sprint Planning & Execution:</h4>
                <small className="text-light">Skilled in defining objectives, managing backlogs, and ensuring sprint goals are met.</small>
              </div>
            </article>
            <article className="experience__details">
              <FaRegCheckCircle className="experience__details-icon"></FaRegCheckCircle>
              <div>
                <h4>Cross-Team Collaboration:</h4>
                <small className="text-light">Facilitating communication between developers, designers, and stakeholders.</small>
              </div>
            </article>

          </div>
        </div>

        <div className="experience__backend">
          <h3>Mentoring & Coaching</h3>
          <div className="experience__content">

            <article className="experience__details">
              <FaRegCheckCircle className="experience__details-icon"></FaRegCheckCircle>
              <div>
                <h4>Team Mentorship:</h4>
                <small className="text-light">Passionate about mentoring junior developers and fostering a growth mindset.</small>
              </div>
            </article>
            <article className="experience__details">
              <FaRegCheckCircle className="experience__details-icon"></FaRegCheckCircle>
              <div>
                <h4>Skill Development:</h4>
                <small className="text-light">Leading training sessions on Agile practices, project management tools, and best practices.</small>
              </div>
            </article>
            <article className="experience__details">
              <FaRegCheckCircle className="experience__details-icon"></FaRegCheckCircle>
              <div>
                <h4>Process Optimization:</h4>
                <small className="text-light">Identifying and implementing process improvements to enhance productivity.</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
