import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import DATA from "../data/headerData.json";
import { BsFillCaretDownFill } from "react-icons/bs";
import { CgArrowTopRight } from "react-icons/cg";

export default function Nav() {
  const location = useLocation();
  const [details, setDetails] = useState(false);

  return (
    <NavContainer>
      <div className="nav__container">
        <div className="nav__container_box">
          <NavLink to="/" className={location.pathname === "/" && "active"}>
            Airdrop
          </NavLink>
          <NavLink
            to="/stakedrop"
            className={location.pathname === "/stakedrop" && "active"}
          >
            StakeDrop
          </NavLink>
          <NavLinkA href="https://assetmantle.one">assetmantle.one</NavLinkA>
          {DATA &&
            React.Children.toArray(
              DATA.navItems.normal.map((data) => (
                <>
                  {data.visibility && (
                    <>
                      {data.href && data.href.charAt(0) === "/" ? (
                        <NavLink
                          to={data.href}
                          className={
                            location.pathname === data.href && "active"
                          }
                        >
                          {data.text}
                        </NavLink>
                      ) : data.href === undefined || data.href === null ? (
                        <NavDetails
                          onClick={() => setDetails(!details)}
                          className={
                            location.pathname === data.href && "active"
                          }
                        >
                          <div className="title">
                            {data.text}{" "}
                            {data.icon === "down-fill" && (
                              <span className={details ? "active" : undefined}>
                                <BsFillCaretDownFill />
                              </span>
                            )}
                          </div>
                          <div
                            className={`details_link ${
                              details ? "active" : undefined
                            }`}
                          >
                            {data.options.map((data) => (
                              <>
                                {data.visibility && (
                                  <NavLink
                                    to={data.href}
                                    className={
                                      location.pathname === data.href &&
                                      "active"
                                    }
                                  >
                                    {data.text}
                                  </NavLink>
                                )}
                              </>
                            ))}
                          </div>
                        </NavDetails>
                      ) : (
                        <NavLinkA
                          href={data.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {data.text}
                        </NavLinkA>
                      )}
                    </>
                  )}
                </>
              ))
            )}
          {DATA &&
            React.Children.toArray(
              DATA.navItems.spacial.map((data) => (
                <>
                  {data.visibility && (
                    <NavLinkExt
                      to={data.href}
                      className={data.disable && "disabled"}
                    >
                      <span>
                        {data.text}
                        {data.icon === "external-link" && <CgArrowTopRight />}
                      </span>
                      {data.instruction}
                    </NavLinkExt>
                  )}
                </>
              ))
            )}
        </div>
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(16, 16, 16, 0.5);
  z-index: 50;
  backdrop-filter: blur(7px);
  display: flex;
  justify-content: flex-end;
  .nav__container {
    position: relative;
    height: 100%;
    width: min(70%, 468px);
    background-color: var(--dark);
    padding: 62px 80px;
    @media (min-width: 1440px) {
      margin-right: calc((100vw - 1440px) / 2);
    }
    @media (max-width: 548px) {
      padding: 62px 20px 60px 40px;
    }
    &_box {
      height: 100%;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 29px;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }

      @media (max-width: 548px) {
        padding-bottom: 70px;
      }
    }
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  width: max-content;
  padding: 4px;
  font: 600 var(--p-xl);
  color: var(--gray);
  border-bottom: 3px solid transparent;
  text-decoration: none;
  gap: 10px;
  span {
    color: var(--yellow);
    margin-top: 10px;
  }
  @media (max-width: 548px) {
    font: 600 var(--p-l);
  }
  &.active {
    border-bottom: 3px solid var(--yellow);
  }
  &:hover {
    color: var(--gray);
    text-decoration: none;
  }
`;
const NavLinkA = styled.a`
  display: flex;
  align-items: center;
  width: max-content;
  padding: 4px;
  font: 600 var(--p-xl);
  color: var(--gray);
  border-bottom: 3px solid transparent;
  text-decoration: none;
  gap: 10px;
  span {
    color: var(--yellow);
    margin-top: 10px;
  }
  @media (max-width: 548px) {
    font: 600 var(--p-l);
  }
  &.active {
    border-bottom: 3px solid var(--yellow);
  }
  &:hover {
    color: var(--gray);
    text-decoration: none;
  }
`;

const NavDetails = styled.div`
  .title {
    display: flex;
    align-items: center;
    width: max-content;
    padding: 4px;
    font: 600 var(--p-xl);
    color: var(--gray);
    border-bottom: 3px solid transparent;
    text-decoration: none;
    gap: 10px;
    span {
      color: var(--yellow);
      /* margin-top: 10px; */
      display: flex;
      height: 100%;
      align-items: center;
      transform: rotate(0deg);
      transition: all 0.3s ease-in-out;
      &.active {
        transform: rotate(180deg);
      }
    }
    @media (max-width: 548px) {
      font: 600 var(--p-l);
    }
    &.active {
      border-bottom: 3px solid var(--yellow);
    }
    &:hover {
      color: var(--gray);
      text-decoration: none;
    }
  }
  .details_link {
    display: none;
    flex-direction: column;
    a {
      padding-left: 30px;
      padding-top: 14.5px;
      &:not(:last-child) {
        padding-bottom: 14.5px;
      }
    }
    &.active {
      display: flex;
    }
  }
`;

const NavLinkExt = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  padding: 7px 4px;
  width: max-content;
  font: 600 var(--p-s);
  color: var(--gray);
  border-bottom: 3px solid transparent;
  text-decoration: none;
  @media (max-width: 548px) {
    font: 600 var(--p-xs);
  }
  span {
    font: 600 var(--p-xl);
    color: var(--yellow);
    @media (max-width: 548px) {
      font: 600 var(--p-l);
    }
  }
  &.disabled {
    color: var(--gray-deep);
    span {
      color: var(--yellow-disabled);
    }
  }
  &:hover {
    color: var(--gray);
    text-decoration: none;
  }
`;
