import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

//  Featured data
import FeaturedData from "../../data/homeData.json";

export default function Featured() {
  const { t } = useTranslation();

  return (
    <FeaturedContainer>
      <h3>{t("FEATURED_TITLE")}</h3>
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
  padding: 120px 92px 30px;
  @media (max-width: 768px) {
    padding: 60px 40px;
  }
  @media (max-width: 548px) {
    padding: 30px 20px;
  }
  color: var(--gray);
    h3 {
        text-align: center;
    }
    .featured_in {
        padding-top: 30px;
        display: flex;
        gap: 65px;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        img{
            transition: all 0.3s ease;
            &:hover {
                transform: scale(1.2);
            }
        }
        &:nth-child(1) {
            img{
                width: 160px;
                height: auto;
            }
        }
        &:nth-child(2) {
            img{
                width: 180px;
                height: auto;
            }
        }
        &:nth-child(3) {
            img{
                width: 180px;
                height: auto;
            }
        }
        &:nth-child(4) {
            img{
                width: 180px;
                height: auto;
            }
        }
        &:nth-child(5) {
            img{
                width: 180px;
                height: auto;
            }
        }
    }
`;
