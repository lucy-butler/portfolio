import React from 'react';
import styled from 'styled-components';

function ContactItem({icon, title, cont}) {
  return (
    <ConstItemStyle>
      <ul>
        <li><span>{icon}</span>{title}<p>{cont}</p></li>
      </ul>
    </ConstItemStyle>
  );
}


const ConstItemStyle = styled.div`
  ul{
    li {      
      color: var(--white-color);
      font-weight: 600;
      letter-spacing: 1px;
      @media screen and (max-widtH:620px) {
        font-size: 1rem;
      }
      @media screen and (min-width:320px) and (max-width:480px) {
        font-size: .8rem;
      }
      span {
        display: inline-block;
        margin-right: .6rem;
        color: #20c997;
        vertical-align: middle;
        svg {
          @media screen and (min-width:320px) and (max-width:480px) {
          margin-right: .4;
          font-size: 1rem;
          }
        }
      }
      p {
        margin-left: 2.1rem;
        color: #20c997;
        font-weight: 400;
        @media screen and (max-widtH:620px) {
        font-size: .8rem;
        }
        @media screen and (min-width:320px) and (max-width:480px) {
        margin-left: 1.6rem;
        font-size: .6rem;
      }
      }
    }
  }
`;

export default ContactItem;
