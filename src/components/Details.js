import React from "react";
import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";

const Details = ({ id, title, details, list, link, afterLink, afterList }) => {
  return (
    <Container tabIndex="0">
      <span className="faq__link_span" id={id}></span>
      <summary>
        {title}
        <span>
          <AiFillCaretDown />
        </span>
      </summary>
      <p className="details">
        {details}{" "}
        {link && (
          <>
            <a
              href={link.link && link.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text && link.text}
            </a>
          </>
        )}
        {afterLink && afterLink}
      </p>
      {list && (
        <>
          <ul>
            {list.map((item, index) => (
              <li key={index}> {item}</li>
            ))}
          </ul>
          <p>{afterList && afterList}</p>
        </>
      )}
    </Container>
  );
};

const Container = styled.details`
  color: var(--gray-deep);
  padding: 40px 0;
  position: relative;
  .faq__link_span {
    position: absolute;
    top: -80px;
  }
  summary {
    font: var(--h4);
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    outline: none;
    color: var(--gray);
    list-style: none;
    letter-spacing: 0.08em;
    &::-webkit-details-marker {
      display: none;
    }
    span {
      width: 16px;
      height: max-content;
      transform-origin: center;
      transition: transform 0.3s ease-in-out;
      font: 600 var(--p-m);
      color: var(--yellow);
    }
  }
  p.details {
    font: var(--p-m);
    font-weight: 400;
    width: min(1176px, 94%);
    margin: 0;
    margin-top: 12px;
    color: var(--gray-deep);
    a {
      color: var(--yellow);
      text-decoration: none;
    }
  }
  ul {
    list-style-position: inside;
    list-style-type: none;
    padding-top: 16px;
    padding-left: 10px;
    font: var(--p-s);
    li {
      padding: 5px 0;
      &::before {
        content: "-";
      }
    }
    & + p {
      font: var(--p-s);
    }
  }
  &[open] {
    summary {
      span {
        transform: rotate(180deg);
      }
    }
  }
`;

export default Details;
