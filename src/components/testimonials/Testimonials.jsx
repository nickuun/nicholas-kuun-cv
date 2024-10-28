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
      name: "Tina",
      review: "Nicholas's guidance made complex tasks seem manageable, and he always encouraged a collaborative, positive atmosphere.",
    },
    {
      avatar: avatar2,
      name: "Chris",
      review: "Working with Nick was a game-changer. His Agile expertise and team-first mentality helped us hit our goals consistently and with high morale.",
    },
    {
      avatar: avatar3,
      name: "Jason",
      review: "Nick has a knack for streamlining processes and making sure everyone is on the same page. His mentorship has been invaluable to our team's development.",
    },
    {
      avatar: avatar4,
      name: "André",
      review: "Nicholas's ability to adapt and guide us through challenges with confidence made him a standout leader.",
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
