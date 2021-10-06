import React from 'react';
import styled from 'styled-components';

function ExperienceItem({year, title, text}) {
  return (
    <ExperienceItemStyle>
      <div className="left-content">
        <p className="year">{year}</p>
      </div>
      <div className="right-content">
        <p className="title">{title}</p>
        <p className="cont">{text}</p>
      </div>
    </ExperienceItemStyle>
  );
}

const ExperienceItemStyle = styled.div`
  display: flex;
  &:not(:last-child) {
    padding-bottom: 3rem;
  }
  .left-content {
    position: relative;
    padding-left: 20px;
    width: 30%;
    &::before {
      content: '';
      position: absolute;
      left: -11px;
      top: 4px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 2px solid var(--icon-color);
      background-color: var(--background-dark-color)
    }
    .year {
      color: var(--white-color);
    }
    p {
      display: inline-block;
    }
  }
  .right-content {
    position: relative;
    padding-left: 5rem;
    width: 70%;
    @media screen and (min-width:320px) and (max-width:480px) {
      padding-left: 1rem;
      }
    &::before {
      content: '';
      position: absolute;
      top: 15px;
      left: 0;
      width: 3rem;
      height: 2px;
      background-color: var(--border-color);
      @media screen and (min-width:320px) and (max-width:480px) {
        width: 10px;
      }
    }
    .title {
      color: var(--icon-color);
      font-size: 1.6rem;
      padding-bottom: .6rem;
      @media screen and (max-width:540px) {
        font-size: 1.2rem;
      }
      @media screen and (min-width:320px) and (max-width:480px) {
        font-size: .9rem;
      }
    }
    .cont {
      color: var(--white-color);
      @media screen and (min-width:320px) and (max-width:480px) {
        font-size: 60%;
      }
    }
  }
  @media screen and (max-width:540px) {
    p {
      font-size: 80%;
    }
  }
  
  
`;

export default ExperienceItem;
