import React from "react";
import styled from "styled-components";
import { GrLinkedinOption, GrGithub, GrTwitter } from "react-icons/gr";
import { BsBehance, BsGlobe2 } from "react-icons/bs";

export default function TeamMemberCard({
  imgSrc = "placeholder.png",
  name = "Team Member",
  position = "Developer",
  social = [],
}) {
  return (
    <Container>
      <div className="teamMemberCard_image">
        <img src={`/images/team/${imgSrc}`} alt={name} />
      </div>
      <h3 className="teamMemberCard_name">{name}</h3>
      <p className="teamMemberCard_designation">{position}</p>
      {Array.isArray(social) && social.length !== 0 && (
        <div className="teamMemberCard_social">
          {social.map((data) => (
            <>
              {data.icon === "LinkedIn" && (
                <a href={data.href} target="_blank" rel="noopener noreferrer">
                  <GrLinkedinOption />
                </a>
              )}
              {data.icon === "Github" && (
                <a href={data.href} target="_blank" rel="noopener noreferrer">
                  <GrGithub />
                </a>
              )}
              {data.icon === "Twitter" && (
                <a href={data.href} target="_blank" rel="noopener noreferrer">
                  <GrTwitter />
                </a>
              )}
              {data.icon === "Behance" && (
                <a href={data.href} target="_blank" rel="noopener noreferrer">
                  <BsBehance />
                </a>
              )}
              {data.icon === "Website" && (
                <a href={data.href} target="_blank" rel="noopener noreferrer">
                  <BsGlobe2 />
                </a>
              )}
            </>
          ))}
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: min(296px, 100%);
  padding-top: 24px;
  text-align: center;
  height: 100%;
  .teamMemberCard {
    &_image {
      width: min(296px, 100%);
      height: 411px;
      aspect-ratio: 13/18;
      padding: 0 !important;
      margin: 0 !important;
      margin-bottom: 18px !important;
      display: flex;
      /* background-color: var(--gray-deep); */
      background-color: #d7d7d7;
      border-radius: 12px;
      overflow: hidden;
      img {
        object-fit: cover;
        object-position: center;
        width: auto;
        height: 100%;
        margin: auto;
      }
    }
    &_name {
      font: var(--h3);
      color: var(--gray);
      padding: 0 !important;
      margin: 0 !important;
      text-transform: capitalize;
    }
    &_designation {
      font: var(--p-m);
      padding: 0 !important;
      margin: 0 !important;
      color: var(--gray-deep);
      text-transform: capitalize;
      text-align: center;
      height: 48px;
    }
    &_social {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
      padding-top: 22px;
      margin-top: auto;
      a {
        color: var(--gray);
        text-decoration: none;
        font: var(--p-l);
        &:hover {
          color: var(--yellow);
        }
      }
    }
  }
`;
