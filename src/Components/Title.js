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
    span {
      position: absolute;
      top: 30%;
      left: 0;
      font-size: 5rem;
      font-weight: 600;
      color: var(--subtitle-color);
      z-index: -1;
      opacity: .5;
    }
  }
`;

export default Title;
