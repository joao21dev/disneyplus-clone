/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" />
          <span>Home</span>
        </a>

        <a>
          <img src="/images/search-icon.svg" />
          <span>Search</span>
        </a>

        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>Watchlist</span>
        </a>

        <a>
          <img src="/images/original-icon.svg" />
          <span>Originals</span>
        </a>

        <a>
          <img src="/images/movie-icon.svg" />
          <span>movies</span>
        </a>

        <a>
          <img src="/images/series-icon.svg" />
          <span>series</span>
        </a>
      </NavMenu>

      <UserImg src="https://media-exp1.licdn.com/dms/image/C4D03AQF0b9Qk-zaqNw/profile-displayphoto-shrink_800_800/0/1633132158142?e=1645056000&v=beta&t=4xaGQ6VI6W_qsuY71zQMYSSKEgF0dGl7E7M5h2IS0C0" />
    </Nav>
  );
}

export default Header;

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 30px;
`;
const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: uppercase;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: #fff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; 
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }

  }
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
