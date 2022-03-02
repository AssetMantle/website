import styled from "styled-components";
import { ButtonPrimary } from "./Buttons";
import { useTranslation } from "react-i18next";

export default function CreateAStore({ title, description, text, href }) {
  const { t } = useTranslation();

  return (
    <Container className="section_letsAmplify">
      <div className="section_letsAmplify__element">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="section_letsAmplify__element bu">
        <ButtonPrimary text={text} href={href} targetBlank={true} />
      </div>
    </Container>
  );
}

const Container = styled.section`
  background-color: var(--dark-m);
  padding: 60px 92px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: no-wrap;
  gap: 50px;
  margin: 60px 0;
  @media (max-width: 768px) {
    padding: 60px 40px;
  }
  @media (max-width: 548px) {
    flex-wrap: wrap;
    padding: 60px 28px;
  }
  .section_letsAmplify__element {
    &:nth-child(1) {
      width: min(936px, 100%);
    }
    h2 {
      font: var(--h2);
      color: var(--gray);
      margin-bottom: 24px;
      @media (max-width: 548px) {
        margin-bottom: 30px;
      }
    }
    p {
      font: var(--p-l);
      margin: 0;
      color: var(--gray-deep);
    }
    &.bu {
      @media (max-width: 548px) {
        width: 100%;
        text-align: center;
      }
      & > a {
        width: max-content;
        display: inline-block;
        @media (max-width: 548px) {
          width: 100%;
          text-align: center;
        }
      }
    }
  }
  .btn__primary {
    @media (max-width: 548px) {
      width: 100%;
      text-align: center;
    }
  }
`;
