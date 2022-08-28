import "./experience.css";
import { FaRegCheckCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Industry Related</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaRegCheckCircle className="experience__details-icon"></FaRegCheckCircle>

              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaRegCheckCircle className="experience__details-icon"></FaRegCheckCircle>

              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaRegCheckCircle className="experience__details-icon"></FaRegCheckCircle>
              <div>
                <h4>Typescript & Next JS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <FaRegCheckCircle className="experience__details-icon"></FaRegCheckCircle>
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaRegCheckCircle className="experience__details-icon"></FaRegCheckCircle>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <FaRegCheckCircle className="experience__details-icon"></FaRegCheckCircle>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
        <div className="experience__content">

          <article className="experience__details">
            <FaRegCheckCircle className="experience__details-icon"></FaRegCheckCircle>
            <div>
              <h4>Node JS</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
              <FaRegCheckCircle className="experience__details-icon"></FaRegCheckCircle>
            <div>
              <h4>Python</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <FaRegCheckCircle className="experience__details-icon"></FaRegCheckCircle>

            <div>
              <h4>AWS Resources</h4>
              <small className="text-light">Basic</small>
            </div>
          </article>
          <article className="experience__details">
            <FaRegCheckCircle className="experience__details-icon"></FaRegCheckCircle>
            <div>
              <h4>Java</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <FaRegCheckCircle className="experience__details-icon"></FaRegCheckCircle>
            <div>
              <h4>MySQL</h4>
              <small className="text-light">Basic</small>
            </div>
          </article>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
