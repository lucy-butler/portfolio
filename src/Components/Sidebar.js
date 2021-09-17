import React from 'react';
import styled from 'styled-components';

function Sidebar() {
  return(
    <SidebarStyle>
          
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