import React, {useState} from 'react';
import Title from '../Components/Title';
import {MainLayout, InnerLayout} from '../styles/Layout';
import portfolios from '../data/portfolios';
import PortfolioMenu from '../Components/PortfolioMenu';
import Button from '../Components/Button';

const allButtons = ['All', ...new Set(portfolios.map(item => item.category))]

function PortfolioPage() {
  const [menuItem, setMenuItems] = useState(portfolios);
  const [button] = useState(allButtons);

  const filter = (button) => {

    if(button === 'All'){
      setMenuItems(portfolios);
      return;
    }

    const filterData = portfolios.filter(item => item.category === button);
    setMenuItems(filterData);
  }
  return (
    <MainLayout>
      <Title title={'Portfoilo'} span={'Portfoilo'} />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <PortfolioMenu menuItem={menuItem}  />
      </InnerLayout>
    </MainLayout>
  );
}




export default PortfolioPage;
