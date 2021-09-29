import React from 'react';
import styled from 'styled-components';

function PrimaryButton({title}) {
  return (
    <PrimaryButtonStyle>
      {title}
    </PrimaryButtonStyle>
  )
}

const PrimaryButtonStyle = styled.button`
  position: relative;
  display: inline-block;
  padding: .8rem 2.5rem;
  color: white;
  background-color: var(--primary-color);
  font-size: inherit;
  cursor: pointer;
  text-transform: uppercase;
  transition: all .4s;
  border: none;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: .2rem;
    opacity: .7;
    transition: all .4s;
  }
  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
`;

export default PrimaryButton;
