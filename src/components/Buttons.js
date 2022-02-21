import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

export const ButtonPrimary = ({ text, href, comingSoon, targetBlank }) => {
  return (
    <BPS
      className={`btn__primary ${comingSoon ? "coming" : undefined}`}
      tabIndex={`0`}
      role="button"
    >
      <a
        href={href}
        target={targetBlank && "_blank"}
        rel={targetBlank && "noopener noreferrer"}
      >
        {text}
      </a>
      {comingSoon && <span>Coming soon</span>}
    </BPS>
  );
};

const BPS = styled.div`
  display: inline;
  font: 600 var(--p-m);
  color: var(--dark-m);
  text-transform: capitalize;
  background: var(--yellow-gradient-bg);
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
    inset -4px -4px 8px rgba(0, 0, 0, 0.25), inset 4px 4px 8px #ffc942;
  border-radius: 12px;
  padding: 10px 43px 12px;
  transition: all ease-in-out 100ms;
  cursor: pointer;
  a {
    color: var(--dark-m);
    text-decoration: none;
  }
  span {
    display: none;
  }
  &:hover,
  &:focus {
    box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
  }
  &.coming {
    span {
      display: none;
    }
    &:hover,
    &:focus {
      span {
        display: inline;
      }
      a {
        display: none;
      }
    }
  }
`;

export const ButtonPrimaryDisabled = ({ text }) => {
  return (
    <BPDS tabIndex="0" role="button" aria-disabled>
      {text}
    </BPDS>
  );
};

const BPDS = styled(BPS)`
  background: var(--yellow-disabled);
  &:hover,
  &:focus {
    box-shadow: none;
  }
`;

export const ButtonSecondary = ({ text, href, comingSoon }) => {
  return (
    <BSS
      className={comingSoon ? "coming" : undefined}
      tabIndex={`0`}
      role="button"
    >
      <a href={href}>{text}</a>
      {comingSoon && <span>Coming soon</span>}
    </BSS>
  );
};

const BSS = styled.div`
  font: 600 var(--p-m);
  color: var(--yellow);
  background: transparent;
  border: 2px solid var(--yellow);
  border-radius: 12px;
  padding: 8px 31px 10px;
  cursor: pointer;
  width: max-content;
  a {
    color: var(--yellow);
    text-decoration: none;
  }
  span {
    display: none;
  }
  &:hover,
  &:focus {
    box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
  }
  &.coming {
    span {
      display: none;
    }
    &:hover,
    &:focus {
      span {
        display: inline;
      }
      a {
        display: none;
      }
    }
  }
`;

export const ButtonSecondaryDisabled = ({ text, href }) => {
  return (
    <BSDS tabIndex={`0`} role="button" aria-disabled>
      <a href={href}>{text}</a>
    </BSDS>
  );
};

const BSDS = styled(BSS)`
  color: var(--yellow-disabled);
  border: 2px solid var(--yellow-disabled);
  background: var(--yellow-disabled);
  &:hover,
  &:focus {
    box-shadow: none;
  }
`;

export const ButtonTertiary = ({
  text,
  href,
  leftArrow,
  comingSoon,
  targetBlank,
}) => {
  return (
    <BTS
      className={comingSoon ? "coming" : undefined}
      href={href}
      onClick={(e) => comingSoon && e.preventDefault()}
    >
      <span>
        {text} {leftArrow && <BsArrowRight />}
      </span>
      {comingSoon && <span className="casas">Coming soon</span>}{" "}
    </BTS>
  );
};

const BTS = styled.a`
  font: 600 var(--p-m);
  color: var(--yellow);
  text-decoration: none;
  span:first-child {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  span.casas {
    display: none;
  }
  &.coming {
    span.casas {
      display: none;
    }
    &:hover,
    &:focus {
      span.casas {
        display: flex;
      }
      span:first-child {
        display: none;
      }
    }
  }
`;

export const ButtonTertiaryDisabled = ({ text, href }) => {
  return (
    <BTDS tabIndex={`0`} role="button" aria-disabled>
      <a href={href}>{text}</a>
    </BTDS>
  );
};

const BTDS = styled(BTS)`
  color: var(--yellow-disabled);
`;
