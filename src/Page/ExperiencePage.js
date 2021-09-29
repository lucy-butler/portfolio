import React from 'react';
import {MainLayout} from '../styles/Layout';
import Title from '../Components/Title';
import styled from 'styled-components';

function ExperiencePage() {
  return (
    <MainLayout>
      <Title title={'Experience'} span={'Experience'} />
      <ExperiencePageStyle>
        <p>a</p>
      </ExperiencePageStyle>
    </MainLayout>
  );
}

const ExperiencePageStyle = styled.div`

`;
export default ExperiencePage;
