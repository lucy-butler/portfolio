import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

function Sidebar() {
  return(
    <SidebarStyle>
      <Navigation />     
    </SidebarStyle>
  );
}

const SidebarStyle = styled.div`
  position: fixed;
  width: 16.3rem;
  height: 100vh;
  background-color: var(--sidebar-dark-color);
`;

export default Sidebar;