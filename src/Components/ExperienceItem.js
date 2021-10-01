import React from 'react';
import styled from 'styled-components';

function ExperienceItem({year, title, text}) {
  return (
    <ExperienceItemStyle>
      <div className="left-content">
        <p>{year}</p>
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
      border: 2px solid #20c997;
      background-color: var(--background-dark-color);
    }
    p {
      display: inline-block;
      
    }
  }
  .right-content {
    position: relative;
    padding-left: 5rem;
    width: 70%;
    &::before {
      content: '';
      position: absolute;
      top: 15px;
      left: 0;
      width: 3rem;
      height: 2px;
      background-color: var(--border-color);
    }
    .title {
      color: #20c997;
      font-size: 1.6rem;
      padding-bottom: .6rem;
      
    }
    .cont {

    }
  }
`;

export default ExperienceItem;
