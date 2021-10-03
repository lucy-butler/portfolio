import React from 'react';
import styled from 'styled-components';

function Button({filter, button}) {
  return (
    <ButtonsStyled>
      {
        button.map((but, i) => {
          return <ButtonStyled key={i} onClick={() => filter(but)}>
            {but}
            </ButtonStyled>
        })
      }
    </ButtonsStyled>
  );
}

const ButtonStyled = styled.button`
  
  outline: none;
  border: none;
  background-color: transparent;
  font-family: sans-serif;
  font-size: 1.2rem;
  font-weight: 200;
  color: var(--white-color);
  cursor: pointer;
  transition: all .2s;
  &:active, &:focus {
    font-size: 2rem;
    color: #20c997;
  }
  &:not(:first-child) {
    margin-left: 2.5rem;
  }
`;

const ButtonsStyled = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-wrap: wrap;
`;

export default Button;