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
      span {
        display: inline-block;
        margin-right: .6rem;
        color: #20c997;
        vertical-align: middle;
      }
      p {
        margin-left: 2.1rem;
        color: #20c997;
        font-weight: 400;
      }
    }
  }
`;

export default ContactItem;
