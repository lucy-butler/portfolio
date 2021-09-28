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
      color: rgba(25, 29, 43, .44);
      z-index: -1;
    }
  }
`;

export default Title;
