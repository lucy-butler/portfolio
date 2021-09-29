import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import profile from '../img/profile.jpg';


function Navigation() {
  return (
    <NavigationStyle>
      <div className="profile">
        <img src={profile} alt="ProfilePicture" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active-class" exact>home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active-class" exact>about</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/experience" activeClassName="active-class" exact>experience</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio" activeClassName="active-class" exact>portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-class" exact>contact</NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>@2021 lucybutler Portfolio</p>
      </footer>
    </NavigationStyle>
  )
}

const NavigationStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-right: 1px solid var(--border-color);

  .profile {
    width: 70%;
    padding: 1rem 0;
    border-bottom: 1px solid var(--border-color);
    img {
      width: 100%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background-color: var(--primary-color);
      color: white;
    }
    li{
      display: block;
      text-transform: uppercase;
      a {
        position:relative;
        display: block;
        padding: .3rem 0;
        transition: all .5s;
        font-weight: 600;
        font-size: 1.1rem;
        letter-spacing: 1px;
      }
      &:hover {
        color: var(--white-color);
      }
      a::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 50%;
        background-color: var(--primary-color);
        opacity: 0.2;
        transition: all 0.4s;
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  footer {
    width: 100%;
    text-align: center;
    border-top: 1px solid var(--border-color);
    p {
      padding: 1rem 0;
      font-size: 1.1rem;
    }
  }
`;

export default Navigation;
