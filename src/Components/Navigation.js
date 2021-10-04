import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import profile from '../img/profile.png';
import Brightness6Icon from '@material-ui/icons/Brightness6'
import Switch from '@material-ui/core/Switch'

function Navigation() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(true);
  
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggle = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme');
      setChecked(true);
    }else {
      setTheme('light-theme');
      setChecked(false);
    }
  }
  

  return (
    <NavigationStyle>
      <div className="profile">
        <img src={profile} alt="ProfilePicture" />
      </div>
      <div className="light-dark-mode">
        <div className="left-content">
          <Brightness6Icon />
        </div>
        <div className="right-content">
          <Switch 
            value="switch"
            checked={checked}
            onClick={themeToggle}
            color="default"
          />
        </div>
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
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-right: 1px solid var(--border-color);
  background-color: var(--side-color);
  .profile {
    width: 60%;
    padding: 1rem 0;
    border-bottom: 1px solid var(--border-color);
    img {
      width: 100%;
      border-radius: 50%;
      border: 4px solid var(--border-color);
    }
  }

  .light-dark-mode {
    display: flex;
    margin: 3rem 0;
    align-items: center;
    justify-content: center;
    background-color: #53708c;
    border-radius: 20px;
    width: 6rem;
    height: 2rem;
    
    .left-content {
      svg {
        display: flex;
        color: var(--moon-color);
      }
    }
  }
  .nav-items {
    margin: auto 0;
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
        color: var(--nav-color);
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
    display: flex;
    justify-content: center;
    width: 100%;
    text-align: center;
    margin-top: auto;
    border-top: 1px solid var(--border-color);
    p {
      padding: 1rem 0;
      font-size: 1.1rem;
      color: var(--nav-color);
    }
  }
`;

export default Navigation;
