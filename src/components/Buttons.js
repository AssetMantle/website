import styled from "styled-components";

export const ButtonPrimary = ({ text, href }) => {
  return (
    <BPS tabIndex={`0`} role="button">
      <a href={href}>{text}</a>
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
  a {
    color: var(--dark-m);
    text-decoration: none;
  }
  &:hover {
    box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
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
  background: #624d19;
  &:hover {
    box-shadow: none;
  }
`;

export const ButtonSecondary = ({ text, href }) => {
  return (
    <BSS tabIndex={`0`} role="button">
      <a href={href}>{text}</a>
    </BSS>
  );
};

const BSS = styled.div`
  font: 600 var(--p-m);
  color: var(--yellow);
  background: transparent;
  border: 2px solid var(--yellow);
  /* box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25),
    inset -4px -4px 8px rgba(0, 0, 0, 0.25), inset 4px 4px 8px #ffc942; */
  border-radius: 12px;
  padding: 10px 31px 12px;
  a {
    color: var(--yellow);
    text-decoration: none;
  }
  &:hover {
    box-shadow: 0px 0px 5px 3px rgba(255, 201, 66, 0.4);
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
  color: #624d19;
  border: 2px solid #624d19;
  background: #624d19;
  &:hover {
    box-shadow: none;
  }
`;

export const ButtonTertiary = ({ text, href }) => {
  return (
    <BSS tabIndex={`0`} role="button">
      <a href={href}>{text}</a>
    </BSS>
  );
};

const BTS = styled.div`
  font: 600 var(--p-m);
  color: var(--yellow);
  a {
    color: var(--yellow);
    text-decoration: none;
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
  color: #624d19;
`;
