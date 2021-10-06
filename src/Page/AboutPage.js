import React from 'react'
import {MainLayout, InnerLayout} from '../styles/Layout';
import Title from '../Components/Title';
import TitleAbout from '../Components/TitleAbout';
import AboutHobby from '../Components/AboutHobby';

function AboutPage() {
  return (
    <MainLayout>
      <Title title={'About Me'} span={'About Me'} />
      <InnerLayout>
        <TitleAbout />
        <AboutHobby />
      </InnerLayout>
    </MainLayout>
  )
}


export default AboutPage;
