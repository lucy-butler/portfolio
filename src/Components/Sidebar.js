import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

function Sidebar({navToggle}) {
  return(
    <SidebarStyle className={`${navToggle ? 'nav-Toggle' : ''}`}>
      <Navigation />     
    </SidebarStyle>
  );
}

const SidebarStyle = styled.div`
  position: fixed;
  width: 16rem;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
  transition: all .4s;
  z-index: 2;
  @media screen and (max-width:1200px) {
    transform: translateX(-100%);
  }
  @media screen and (max-width:520px) {
    width: 12rem;
  }
`;

export default Sidebar;