import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 5rem;
  @media screen and (max-width:768px) {
    padding: 5rem 3rem;
  }
  @media screen and (max-width:620px) {
    padding: 5rem 2rem;
  }
  @media screen and (max-width:570px) {
    padding: 4rem .8rem;
  }
`;
export const InnerLayout = styled.div`
  padding: 5rem 0;
  @media screen and (max-width:570px) {
    padding: 3rem 0;
  }
`;