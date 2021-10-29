import React from 'react'
import styled from 'styled-components';
import AboutImage from '../img/about.jpg'

function TitleImage() {
  return (
    <TitleAboutStyle>
      <div className="left-content">
        <img src={AboutImage} alt="작성자 이미지" />
      </div>
      <div className="right-content">
        <div className="sub-title">
          <h3>I'm a WEB <span>PUBLISHER</span></h3>
          <dl className="about-info">
            <dt>Name :</dt>
            <dd>채봉기</dd>
            <dt>Birth :</dt>
            <dd>1988. 02. 13</dd>
            <dt>Address :</dt>
            <dd>서울시 구로구 천왕동</dd>
            <dt>E-Mail :</dt>
            <dd>lucybutler@naver.com</dd>
            <dt>Cell Phone :</dt>
            <dd>010-0000-0000</dd>
          </dl>
          <p className="introduce">
            안녕하세요 저는 웹디자이너로 첫직장에 취업을 했으며 포토샵과 기본적인 HTML 문법만 다루다가 웹 사이트를 제작 할 기회가 생겨서 주말에 학원이나 강좌를 보면서 CSS,  jQuery를 접하게 되었고 실제로 보이는걸 구현 할 수 있다는거에 흥미를 느끼게 되면서 퍼블리셔도 겸하면서 회사 업무를 맡고 있었습니다. <br />지금은 JavaScript나 React를 좀 더 배우면서 프론트엔드를 목표로 공부를 하고 있습니다. <br />아직은 모르는것도 많고 배울것도 많지만 뒤쳐지지 않고 성장하며 나아가는 사람이 되려고 합니다.
          </p>
        </div>
      </div>
    </TitleAboutStyle>
  );
}

const TitleAboutStyle = styled.div`
  display: flex;

  .left-content {
    width: 100%;
    img {
      width: 90%;
      border-radius: 6px;
    }    
  }
  .right-content {
    display: flex;
    width: 100%;
    

    h3 {
      margin-bottom: 1.3rem;
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
        color: var(--web-color);
        @media screen and (min-width:320px) and (max-width:480px) {
        font-size: 1.4rem;
        }
      }
      @media screen and (min-width:320px) and (max-width:480px) {
        font-size: 1rem;
      }
    }
    .about-info {
      dt {
        display: inline-block;
        width: 10rem;
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--white-color);
        line-height: 2.2rem;
        @media screen and (min-width:320px) and (max-width:480px) {
        width: 5rem;
        font-size: .8rem;
        }
      }
      dd {
        display: inline-block;
        width: calc(100% - 10rem);
        font-size: 1rem;
        font-weight: 600;
        color: var(--webspan-color);
        letter-spacing: 1px;
        @media screen and (min-width:320px) and (max-width:480px) {
        width: calc(100% - 5rem);
        font-size: .8rem;
        }
      }
      
    }
    .introduce {
      margin-top: 1.5rem;
      font-size: 1rem;
      letter-spacing: 1px;
      line-height: 1.7rem;
      color: var(--white-color);
      @media screen and (min-width:320px) and (max-width:480px) {
        font-size: .8rem;
        }
    }
  }
  @media screen and (max-width:1024px) {
    flex-direction: column;
    .left-content {
      img {
        width: 100%;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default TitleImage;
