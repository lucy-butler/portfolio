import React from 'react'
import {MainLayout} from '../styles/Layout';
import Title from '../Components/Title';
import TitleAbout from '../Components/TitleAbout';
import AboutHobby from '../Components/AboutHobby';

function AboutPage() {
  return (
    <MainLayout>
      <Title title={'About Me'} span={'About Me'} />
      <TitleAbout />
      <AboutHobby />
    </MainLayout>
  )
}


export default AboutPage;
