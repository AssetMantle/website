import styled from "styled-components";

export const StoreBox = ({
  viewerImage = "/images/landing/store/1.png",
  gridImage1 = "/images/landing/store/2.png",
  gridImage2 = "/images/landing/store/3.png",
  gridImage3 = "/images/landing/store/4.png",
  profileImage = "/images/landing/store/profile.png",
  name = "Name not found",
  description = "Description not found",
}) => {
  return (
    <Container className="section_stores__element_card" tabIndex="0">
      <div className="section_stores__element_card__viewer">
        <img src={viewerImage} alt="" />
      </div>
      <div className="section_stores__element_card__grid">
        <img src={gridImage1} alt="" />
        <img src={gridImage2} alt="" />
        <img src={gridImage3} alt="" />
      </div>
      <div className="section_stores__element_card__profile">
        <div className="section_stores__element_card__profile_image">
          <img src={profileImage} alt={name} />
        </div>
        <div className="section_stores__element_card__profile_details">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  &.section_stores__element_card {
    padding: 16px;
    display: grid;
    width: min(100%, 374px);
    background-color: var(--dark-m);
    box-shadow: var(--dark-shadow);
    border-radius: 12px;
    margin: auto;
    .section_stores__element_card__viewer {
      img {
        width: 100%;
        border-radius: 12px;
      }
    }
    .section_stores__element_card__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      padding-top: 16px;
      img {
        width: 100%;
        border-radius: 12px;
      }
    }
    .section_stores__element_card__profile {
      padding-top: 16px;
      display: none;
      gap: 8px;
      @media only screen and (max-width: 548px) {
        display: flex;
      }
      &_image {
        img {
          border-radius: 50%;
          aspect-ratio: 1/1;
          margin: auto;
        }
      }
      &_details {
        display: flex;
        flex-direction: column;
        gap: 4px;
        h4 {
          font: var(--h4);
          color: var(--gray);
        }
        p {
          font: var(--p-s);
          color: var(--gray-deep);
          margin: 0;
        }
      }
    }
    &:hover,
    &:focus {
      .section_stores__element_card__profile {
        display: flex;
      }
    }
  }
`;
