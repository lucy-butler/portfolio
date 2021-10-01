import React from 'react';
import styled from 'styled-components';
import LinkIcon from '@material-ui/icons/Link'

function PortfolioMenu({menuItem}) {
  return (
    <MenuItemStyle>
      {
        menuItem.map((item) => {
          return <div className="grid-item" key={item.id}>
            <div className="portfolio-image">
              <a href={item.link1}><LinkIcon /></a>
              <img src={item.image} alt={item.alt} />
            </div>
            <div className="portfolio-cotent">
              <p className="category">{'#' + item.category}</p>
              <p className="title">{item.title}</p>
              <p className="text">{item.text}</p>
            </div>
          </div>
        })
      }
    </MenuItemStyle>
  );
}

const MenuItemStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
  .grid-item {
    margin-bottom: 1.4rem;

    .portfolio-image {
      position: relative;
      cursor: pointer;
      img {
        width: 100%;
        height: 30vh;
        object-fit: cover;
      }
      a {
        display: block;
        svg {
          position: absolute;
          top: 50%;
          left: 50%;
          font-size: 3.4rem;
          transform: translate(-50%, -50%);
          color: white;
          opacity: 0;
        }
        &:before {
          position: absolute;
          top: 50%;
          left: 50%;
          background-color: #212121;
          width: 0;
          height: 0;
          content: '';
          transition: all 0.4s;
        }
      }
      &:hover a {
        
        &:before {
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: .6;
        }
        svg {
          opacity: 1;
          transition: all 1.2s;

        }
      }
      
    }
    .portfolio-cotent {
      text-align: center;
      .category {
        margin-top: .4rem;
        font-size: .8rem;
        color: #20c997;
      }
      .title {
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--white-color);
      }
      .text {
        font-weight: 200;
        font-size: 1rem;
      }
    }
  }
`;

export default PortfolioMenu;
