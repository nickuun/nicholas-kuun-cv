import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";

const Portfolio = () => {
  const PortfolioObjects = [
    {
      id: 1,
      image: IMG1,
      title: "Digital CV Online",
      github: "https://github.com/nickuun/nicholas-kuun-cv",
      demo: "https://nickuun.github.io/nicholas-kuun-cv/",
    },
    {
      id: 2,
      image: IMG2,
      title: "Simulated Fish Tank",
      github: "https://github.com",
      demo: "https://github.com",
    },
    // {
    //   id: 3,
    //   image: IMG3,
    //   title: "Simulated Fish Tank",
    //   github: "https://github.com",
    //   demo: "https://github.com",
    // },
    // {
    //   id: 4,
    //   image: IMG4,
    //   title: "Simulated Fish Tank",
    //   github: "https://github.com",
    //   demo: "https://github.com",
    // },
  ];

  return (
    <section id="portfolio">
      <h5>Take A Look At Some Of</h5>
      <h2>My Work</h2>

      <div className="container portfolio__container">
        {PortfolioObjects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
        {/* {getObject()} */}
      </div>
    </section>
  );
};

export default Portfolio;
