import React from "react";
import styled from "styled-components";

export const TestimonialBox = ({
  title = "Placeholder: Testimonial Title",
  details = "Placeholder: Testimonial",
  profileImage = "/images/landing/prof_img.png",
  name = "Jon dou",
  description = "Haven't added yet",
}) => {
  return (
    <Container className="section_testimonial_slick__option">
      <p className="testimonial_title">{title}</p>
      <p className="testimonial_details">{details}</p>
      <div className="testimonial_owner">
        <div className="testimonial_owner__element">
          <img src={profileImage} alt="" />
        </div>
        <div className="testimonial_owner__element">
          <p className="testimonial_owner__element_name">{name}</p>
          <p className="testimonial_owner__element_details">{description}</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  &.section_testimonial_slick__option {
    padding: 40px;
    border-radius: 12px;
    background-color: var(--dark-m);
    box-shadow: var(--dark-shadow);
    max-width: 536px;
    margin: auto;
    @media (max-width: 548px) {
      padding: 20px;
    }
    p {
      margin: 0;
      &.testimonial {
        &_title {
          font: 600 var(--p-m);
          margin-bottom: 8px;
        }
        &_details {
          font: var(--p-m);
          margin-bottom: 33px;
        }
        &_owner {
          display: flex;
          gap: 16px;
          &__element {
            img {
              width: 44px;
              height: 44px;
            }
            &_name {
              font: 600 var(--p-l);
              margin-bottom: 4px;
            }
            &_details {
              font: 600 var(--p-s);
            }
          }
        }
      }
    }
    .testimonial_owner {
      display: flex;
      gap: 16px;
      img {
        width: 52px;
        height: 52px;
      }
    }
  }
`;
