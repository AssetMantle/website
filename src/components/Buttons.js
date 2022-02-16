import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

export const ButtonPrimary = ({ text, href, comingSoon }) => {
  return (
    <BPS className={comingSoon && "coming"} tabIndex={`0`} role="button">
      <a href={href}>{text}</a>
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
    <BSS className={comingSoon && "coming"} tabIndex={`0`} role="button">
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
  padding: 10px 31px 12px;
  cursor: pointer;
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

export const ButtonTertiary = ({ text, href, leftArrow }) => {
  return (
    <BTS href={href}>
      {text} {leftArrow && <BsArrowRight />}
    </BTS>
  );
};

const BTS = styled.a`
  font: 600 var(--p-m);
  color: var(--yellow);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
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
