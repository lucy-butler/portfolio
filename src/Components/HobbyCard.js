import React from 'react'
import styled from 'styled-components';

function HobbyCard({image, title, cont}) {
  return (
    <HobbyCardStyle>
      <div className="container">
        <p>{image}</p>
        <dl>
          <dt>{title}</dt>
          <dd>{cont}</dd>
        </dl>
      </div>
    </HobbyCardStyle>
  );
}

const HobbyCardStyle = styled.div`
  border-radius: 4px;
  background-color: var(--background-darkgrey-color);
  border-left: 1px solid var(--border-color);
  border-top: 10px solid var(--border-color);
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  transition: all .4s;
  &:hover {
    border-top: 10px solid var(--primary-color);
    transform: translateY(3px);
  }
  .container {
    padding: 1.2rem;
    svg {
      font-size: 4rem;
      color: var(--web-color);
    }
    dt {
      position: relative;
      padding: 1rem 0;
      font-size: 1.4rem;
      font-weight: 600;
      color: var(--white-color);
      @media screen and (min-width:320px) and (max-width:480px) {
      font-size: 1rem;
      }
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 4px;
        width: 70px;
        height: 4px;
        border-radius: 2px;
        background-color: var(--border-color);
      }
    }
    dd {
        padding: .8rem 0;
        font-size: .9rem;
        letter-spacing: 1px;
        color: var(--white-color);
        @media screen and (min-width:320px) and (max-width:480px) {
        font-size: .8rem;
        }
      }
  }
`;

export default HobbyCard;
