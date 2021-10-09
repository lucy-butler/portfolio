import React from 'react';
import styled from 'styled-components';
import { Typewriter } from 'react-simple-typewriter'

function HomeTitle() {
  return (
    <HomeTitleStyle>
      <div className="typography">
        <h1>Hello. I'm a
          <span className="typo">
            <Typewriter
              words={['HTML', 'CSS', 'JavaScript', 'WEB PUBLISHER!']}
              loop
              cursor
              cursorStyle='|'
              typeSpeed={150}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p>
          lucybutler portfolio에 오신것을 환영합니다
        </p>
      </div>
    </HomeTitleStyle>
  );
}

const HomeTitleStyle = styled.div`
  .typography {
    position: absolute;
    top: 55%;
    left: 3%;
    h1 {     
      font-size: 4rem;
      @media screen and (min-width:320px) and (max-width:480px) {
        font-size: 1.8rem;
      }
      .typo {
        
        @media screen and (max-width: 768px) {
          display: block;
        }
      }
      span {
        margin-left: 1rem;
        font-size: 4rem;
        @media screen and (max-width: 768px) {
          margin-left: 0;
        }
        @media screen and (min-width:320px) and (max-width:480px) {
        font-size: 3rem;
        }
      }   
    }
    p {
      margin-top: 1rem;
      font-size: 1rem;
      /* font-size: .8rem; */
      color: var(--white-color);
      @media screen and (min-width:320px) and (max-width:480px) {
        font-size: .8rem;
      }
    }
    
  }

`;

export default HomeTitle;
