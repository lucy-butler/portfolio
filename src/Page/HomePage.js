import React from 'react'
import styled from 'styled-components';
import Particle from '../Components/Particle';
import Moon from '../img/moon.png';
import Mountin from '../img/mountin.png'
import Lcloud from '../img/left-cloud.png'
import Rcloud from '../img/right-cloud.png'


function HomePage() {
  return (
    <HomePageStyle>
      <div className="p-particle-js">
        <Particle />
      </div>
      <div className="zoom">
        <img src={Moon} alt="달이미지" className="moon" />
        <img src={Mountin} alt="산이미지" className="mountin" />
        <img src={Lcloud} alt="구름이미지" className="lcloud" />
        <img src={Rcloud} alt="구름이미지" className="rcloud" />
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
  position: relative;
  width: 100%;
  height: 100vh;
  background: var(--backhome-color);
  
  .p-particle-js {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
  
  .zoom {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    
    .moon {
      position: absolute;
      top: 0;
      left: 0;
      mix-blend-mode: screen;
    }
    .lcloud {
      position: absolute;
      top: 30%;
      left: -15%;
      width: 400px;
      opacity: .6;
      transition: all .4s;
      @media screen and (max-width: 620px) {
        left: -40%;
      }
    }
    .rcloud {
      position: absolute;
      top: 24%;
      right: -10%;
      width: 600px;
      opacity: .6;
      transition: all .4s;
      @media screen and (max-width: 900px) {
        width: 400px;
        right: -20%;
      }
      @media screen and (max-width: 580px) {
        right: -40%;
      }
      @media screen and (max-width: 520px) {
        right: -90%;
      }
    }
    .mountin {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      opacity: .6;
    }
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
