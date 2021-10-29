import web_project03 from '../img/portImages/web_project03.jpg';
import web_project01 from '../img/portImages/web_project01.jpg';
import web_project02 from '../img/portImages/web_project02.jpg';
import web_project04 from '../img/portImages/web_project04.jpg';
import web_project05 from '../img/portImages/web_project05.jpg';
import web_project06 from '../img/portImages/web_project06.jpg';

const portfolios = [
    {
        id: 1,
        category: 'PC',
        image: web_project06,
        alt: '암보험몰 홈페이지',
        link1: 'https://portfolio.discode.co.kr/site/web_project06/',
        link2: '_blank',
        title: 'am-insurance HomePage',
        text: 'grid/float/flex ie에 맞춘 암보험몰 사이트'
    },
    {
        id: 2,
        category: 'PC',
        image: web_project03,
        alt: '캐스퍼 홈페이지',
        link1: 'https://portfolio.discode.co.kr/site/web_project03/',
        link2: '_blank',
        title: 'Event HomePage',
        text: '간단한 이미지 화면전환을 이용한 이벤트 사이트'
    },
    {
        id: 3,
        category: 'PC',
        image: web_project01,
        alt: '카페 홈페이지',
        link1: 'https://portfolio.discode.co.kr/site/web_project01',
        link2: '_blank',
        title: 'Cafe HomePage',
        text: 'ie적용 가능한 스와이퍼 모션추가한 홈페이지'
    },
    {
        id: 4,
        category: '반응형',
        image: web_project02,
        alt: '쇼핑몰 형 홈페이지',
        link1: 'https://portfolio.discode.co.kr/site/web_project02',
        link2: '_blank',
        title: 'sports 쇼핑몰 홈페이지',
        text: 'ie 적용 가능한 grid 이용한 반응형 사이트'
    },
    {
        id: 5,
        category: '반응형',
        image: web_project05,
        alt: '기업형 홈페이지',
        link1: 'https://portfolio.discode.co.kr/site/web_project05',
        link2: '_blank',
        title: '기업형 홈페이지',
        text: '영상을 배경으로 이용한 반응형 사이트'
    },
    {
        id: 6,
        category: 'REACT',
        image: web_project04,
        alt: '호텔 소개 홈페이지',
        link1: 'https://portfolio.discode.co.kr/site/web_project04/',
        link2: '_blank',
        title: 'Hotel Reservation',
        text: 'React 적용한 슬라이드 페이지'
    }
]

export default portfolios;