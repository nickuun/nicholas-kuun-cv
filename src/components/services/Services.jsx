import { BsCheck2 } from "react-icons/bs";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer In Terms Of</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Agile Coaching</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Guiding teams to effectively adopt Agile frameworks.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Conducting workshops on Agile practices and tools.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Coaching individuals to manage projects independently.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Facilitating retrospectives to drive continuous improvement.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Project Strategy</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Defining clear project roadmaps and objectives.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Aligning team goals with the company's vision.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Creating detailed project plans to ensure timely delivery.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Managing resources to maximize project efficiency.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Team Building</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Encouraging open communication and feedback.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Facilitating team-building activities and bonding exercises.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Leading retrospectives for growth and development.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Creating a positive and inclusive work environment.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
