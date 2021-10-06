import React from 'react'
import styled from 'styled-components';

function Title({title, span}) {
  return (
    <TitleStyle>
      <h2>{title} <span>{span}</span></h2>
    </TitleStyle>
  )
}

const TitleStyle = styled.div`
  position: relative;
  h2 {
    color: var(--white-color);
    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    @media screen and (max-width:500px) {
        /* top: 45%;
        left: 1%; */
        font-size: 1.8rem;
      }
    span {
      position: absolute;
      top: 30%;
      left: 0;
      font-size: 5rem;
      font-weight: 600;
      color: var(--subtitle-color);
      z-index: -1;
      opacity: .5;
      @media screen and (max-width:768px) {
        top: 40%;
        font-size: 4rem;
      }
      @media screen and (max-width:620px) {
        top: 45%;
        left: 1%;
        font-size: 3.4rem;
      }
      @media screen and (max-width:500px) {
        /* top: 45%;
        left: 1%; */
        font-size: 2rem;
      }
    }
  }
`;

export default Title;
