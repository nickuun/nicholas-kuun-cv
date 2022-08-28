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
            <h3>
              <h3>UI/UX Design</h3>
            </h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            {/* END UI UX */}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>
              <h3>Web Development</h3>
            </h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            {/* END Web Dev */}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>
              <h3>Content Creation</h3>
            </h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon"></BsCheck2>
              <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
            </li>
            {/* END Content Creation */}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
