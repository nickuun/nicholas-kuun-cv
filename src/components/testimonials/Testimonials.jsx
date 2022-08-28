import "./testimonials.css";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonals = (props) => {
  const testimonialObjects = [
    {
      avatar: avatar1,
      name: "Tina Snow",
      review:
        "This is text and says how well the dude did while he was with the company or whatever?",
    },
    {
      avatar: avatar2,
      name: "Chance John",
      review:
        "This is text and says how well the dude did while he was with the company or whatever?",
    },
    {
      avatar: avatar3,
      name: "Johna Cat",
      review:
        "This is text and says how well the dude did while he was with the company or whatever?",
    },
    {
      avatar: avatar4,
      name: "Tina Turner",
      review:
        "This is text and says how well the dude did while he was with the company or whatever?",
    },
  ];

  return (
    <section id="testimonials">
      <h5>A Few Client & Performance</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialObjects.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}></img>
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonals;
