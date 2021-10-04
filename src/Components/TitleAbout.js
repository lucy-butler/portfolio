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
          <p className="introduce">안녕하세요 저는 첫직장을 웹디자이너로 들어가서 포토샵이 아닌 HTML, CSS, JavaScript로 홈페이지가 꾸며지는게 더 흥미롭게 느껴져서 웹퍼블리셔 방향으로 전향하며 공부를 해왔습니다.<br />공부 할수록 화면에 보여주는게 끝이아니라 시멘틱 마크업으로 의미에 맞는 코드나 유지보수에 좋은 코드 등 효율적으로 작업해야 한다는걸 알았고 그러면서 디자이너나 개발자와 소통하는것도 중요하다는것을 알았습니다.<br />지금은 프론트엔드 목표로 공부하고 있습니다. <br />아직 모르는것도 많고 배울것도 많지만 뒤처지지 않고 성장하며 나아가는 사람이 되려고 합니다.</p>
        </div>
      </div>
    </TitleAboutStyle>
  );
}

const TitleAboutStyle = styled.div`
  display: flex;
  margin-top: 5rem;
  
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
      }
      dd {
        display: inline-block;
        width: calc(100% - 10rem);
        font-size: 1rem;
        font-weight: 600;
        color: var(--webspan-color);
        letter-spacing: 1px;
      }
    }
    .introduce {
      margin-top: 1.5rem;
      font-size: 1rem;
      letter-spacing: 1px;
      line-height: 1.7rem;
      color: var(--white-color);
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
