import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

//  Featured data
import FeaturedData from "../../data/homeData.json";

export default function Featured() {
  const { t } = useTranslation();

  return (
    <FeaturedContainer>
      <h2 className="yellow-t">
        <hr />
        {t("FEATURED_TITLE")}
        <hr />
      </h2>
      <div className="featured_in">
        {React.Children.toArray(
          FeaturedData.featured.news.map((data) => (
            <a href={data.href} target="_blank" rel="noopener noreferrer">
              <img
                src={`/images/landing/${data.img}.png`}
                alt={data.img}
                className="featured_in__img"
              />
            </a>
          ))
        )}
      </div>
    </FeaturedContainer>
  );
}

const FeaturedContainer = styled.div`
  background-image: url("/images/bg/gradient_bg.png");
  background-size: 100%;
  background-repeat: no-repeat repeat;
  padding: 40px 92px;
  margin-top: 60px;
  @media (max-width: 768px) {
    padding: 60px 40px;
  }
  @media (max-width: 548px) {
    padding: 30px 20px;
  }
  color: var(--gray);
  h2 {
    text-align: center;
    position: relative;
    display: flex;
    gap: 8px;
    hr {
      margin: auto 0;
      background: radial-gradient(
        50% 50% at 50% 50%,
        #ffc640 47.4%,
        #f2af13 100%
      );
      /* Icon-yellow */

      box-shadow: 1.41818px 1.41818px 2.83636px rgba(0, 0, 0, 0.2),
        inset -1.41818px -1.41818px 2.83636px rgba(0, 0, 0, 0.2),
        inset 1.41818px 1.41818px 2px #ffd365;
      border-radius: 10px;
      height: 5px;
      border: none;
      outline: none;
      flex: 1;
    }
  }
  .featured_in {
    padding-top: 30px;
    display: flex;
    gap: 65px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    img {
      transition: all 0.3s ease;
      &:hover {
        transform: scale(1.2);
      }
    }
    &:nth-child(1) {
      img {
        width: 160px;
        height: auto;
      }
    }
    &:nth-child(2) {
      img {
        width: 180px;
        height: auto;
      }
    }
    &:nth-child(3) {
      img {
        width: 180px;
        height: auto;
      }
    }
    &:nth-child(4) {
      img {
        width: 180px;
        height: auto;
      }
    }
    &:nth-child(5) {
      img {
        width: 180px;
        height: auto;
      }
    }
  }
`;
