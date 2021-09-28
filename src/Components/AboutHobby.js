import React from 'react'
import {InnerLayout} from '../styles/Layout';
import styled from 'styled-components';
import Title from '../Components/Title';
import HobbyCard from '../Components/HobbyCard';
import bicycle from '../img/bicycle.png';
import board from '../img/board.png';
import movie from '../img/movie.png';


function AboutHobby() {
  return (
    <InnerLayout>
      <AboutHobbyStyle>
        <Title title={'Hobby'} span={'Hobby'} />
        <div className="hobbys">
          <HobbyCard 
            image={bicycle}
            title={'Bicycle Repair'}
            cont={'친구 권유로 20대때 자전거 동호회 들어갔는데 너무 재미있어서 매일 타고 경사가 있는 코스를 많이 다니다 보니 무릎이 상해서 지금은 한강 나들이 정도 갈때 타거나 자전거 정비를 취미로 하고있습니다.'}
          />
          <HobbyCard 
            image={board}
            title={'Board Game'}
            cont={'보드게임은 부루마블 정도만 몇번 해봤는데 코로나 때문에 밖에서 놀기가 부담스러워서 친구들끼리 집에서 한번 시작한게 카탄이라는 보드게임인데 이게 너무 재밌어서 사이드, 스플랜더 등 재미있다고 하는 보드게임은 계속 구매하면서 즐기고 있습니다.'}
          />
          <HobbyCard 
            image={movie}
            title={'Beam Projector Movie'}
            cont={'자취 하다보니 평소에 빔프로젝터 설치해보는게 로망이였는데 마침 TV가 망가져서 구매를 해봤는데 영화나 드라마 볼때 몰입감이 있어서 평소에 TV를 잘 안봤는데 빔을 설치하고 나서는 여태 보지 않았던 드라마나 영화를 보게되면서 취미 추가로 생겼습니다.'}
          />
        </div>
      </AboutHobbyStyle>
    </InnerLayout>
  );
}

const AboutHobbyStyle = styled.section`
  .hobbys {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    margin-top: 5rem;    
  }
`;

export default AboutHobby;
