import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.jpg";

const Portfolio = () => {
  const PortfolioObjects = [
    {
      id: 1,
      image: IMG1,
      title: "Digital CV Online",
      description: "A digital resume showcasing my skills and experiences.",
      link: "https://nickuun.github.io/nicholas-kuun-cv/",
    },
    {
      id: 2,
      image: IMG3,
      title: "Indie Games on Itch.io",
      description:
        "A collection of indie video games I've developed and shared on my Itch.io page.",
      link: "https://nickuun.itch.io/",
    },
    {
      id: 3,
      image: IMG2,
      title: "Resource Zen",
      description:
        "A resource management tool developed with my company, focusing on simplifying project and team coordination.",
      link: "https://www.resourcezen.co.za/",
    },
    {
      id: 4,
      image: IMG4,
      title: "Autumn Leaf Projects",
      description:
        "Projects developed while working at Autumn Leaf, including various digital product development initiatives.",
      link: "https://www.al.co.za/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>Take A Look At Some Of</h5>
      <h2>My Work</h2>

      <div className="container portfolio__container">
        {PortfolioObjects.map(({ id, image, title, description, link }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title}></img>
            </div>
            <h3>{title}</h3>
            <p className="portfolio__item-description">{description}</p>
            <div className="portfolio__item-cta">
              <a href={link} className="btn btn-primary" target="_blank">
                Visit Project
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
