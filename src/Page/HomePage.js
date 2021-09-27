import React from 'react'
import styled from 'styled-components';
import Particle from '../Components/Particle';


function HomePage() {
  return (
    <HomePageStyle>
      <div className="p-particle-js">
        <Particle />
      </div>
      <div className="typography">
        <h1>Hi I'm <span>Lorem Ipsum</span></h1>
        <p>
        Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem.
        Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum
        Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum.
        </p>
      </div>  
    </HomePageStyle>
  );
}

const HomePageStyle = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  .p-particle-js {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
  
  .typography {
    position: absolute;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;
export default HomePage;
