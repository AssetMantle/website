import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { TestimonialBox } from "../../components/TestimonialBox";

const Testimonial = () => {
  const DaTa = [
    {
      title: "Lorem ipsum dolor",
      details:
        "“Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
      profileImage: "/images/landing/prof_img.png",
      name: "User long name",
      description: "Dolor sit amet",
    },
    {
      title: "Lorem ipsum dolor",
      details:
        "“Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
      profileImage: "/images/landing/prof_img.png",
      name: "User long name",
      description: "Dolor sit amet",
    },
    {
      title: "Lorem ipsum dolor",
      details:
        "“Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
      profileImage: "/images/landing/prof_img.png",
      name: "User long name",
      description: "Dolor sit amet",
    },
  ];

  return (
    <section className="section_testimonial">
      <h2>Hear what people have to say </h2>
      <p>
        People who have tried AssetMantle are rocking it, whether they are
        creators or collectors
      </p>
      <div className="section_testimonial_slick">
        <Splide
          options={{
            type: "slide",
            pagination: false,
            perPage: 2,
            perMove: 1,
            speed: 400,
            interval: 3,
            gap: "24px",
            breakpoints: {
              548: {
                perPage: 1,
              },
            },
          }}
        >
          {React.Children.toArray(
            DaTa.map((data) => (
              <SplideSlide>
                <TestimonialBox
                  title={data.title}
                  details={data.details}
                  profileImage={data.profileImage}
                  name={data.name}
                  description={data.description}
                />
              </SplideSlide>
            ))
          )}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonial;
