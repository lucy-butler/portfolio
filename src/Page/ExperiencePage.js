import React from 'react';
import {MainLayout, InnerLayout} from '../styles/Layout';
import Title from '../Components/Title';
import styled from 'styled-components';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import ExperienceItem from '../Components/ExperienceItem';
import CardMembershipIcon from '@material-ui/icons/CardMembership';

function ExperiencePage() {
  const Timelapse = <TimelapseIcon />
  const Certificate = <CardMembershipIcon />
  return (
    <MainLayout>
      <Title title={'Experience'} span={'Experience'} />
      <InnerLayout>
        <ExperiencePageStyle>
          <div className="sub-title">
            <h3><span>{Timelapse}</span>Education / Job Experience</h3>
          </div>
          <div className="exrerience-content">
            <ExperienceItem 
              year={'2021.08'}
              title={'보험몰닷컴'}
              text={'퇴사'}
            />
            <ExperienceItem 
              year={'2021.02 - 2021.04'}
              title={'디코드컴퓨터학원'}
              text={'프론트엔드 웹개발자를 위한 JavaScript 및 jQuery 과정 수료'}
            />
            <ExperienceItem 
              year={'2015.09 - 2016.01'}
              title={'하이미디어컴퓨터학원'}
              text={'웹표준(JavaScript/jQuery/Html5/CSS3) 과정 수료'}
            />
            <ExperienceItem 
              year={'2013.10'}
              title={'보험몰닷컴'}
              text={'사이트제작 및 디자인 제작 웹디자이너로 취업'}
            />
            <ExperienceItem 
              year={'2013.04 - 2013.10'}
              title={'SBS아카데미컴퓨터학원'}
              text={'웹디자인/퍼블리셔과정 포토샵/일러스트/html/Css/jQurey'}
            />
            <ExperienceItem 
              year={'2007.03 - 2013.02'}
              title={'동양미래대학교'}
              text={'소프트웨어정보과 졸업'}
            />
            <ExperienceItem 
              year={'2014.02 - 2007.02'}
              title={'포천일고등학교'}
              text={'인터넷 정보과 졸업'}
            />
          </div>
          <div className="sub-title certificate">
            <h3><span>{Certificate}</span>Certificate</h3>
          </div>
          <ExperienceItem 
              year={'2014.04'}
              title={'웹디자인기능사'}
              text={'한국산업인력공단'}
            />
        </ExperiencePageStyle>
      </InnerLayout>
    </MainLayout>
  );
}

const ExperiencePageStyle = styled.section`
  .sub-title {
    h3 {
      font-size: 2rem;
      font-weight: 400;
      color: var(--white-color);
      @media screen and (max-width:620px) {
        font-size: 1.6rem;
      }
      span {
        display: inline-block;
        margin-right: .6rem;
        vertical-align: middle;
        svg {
          font-size: 2.5rem;
          color: var(--icon-color);
        }
      }
    }
  }
  .certificate {
    margin: 3rem 0 2rem 0;
  }
  .exrerience-content {
    margin-top: 2rem;
    border-left: 2px solid var(--icon-color);
  }
`;
export default ExperiencePage;
