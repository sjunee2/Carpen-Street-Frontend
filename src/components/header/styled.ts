import styled from "styled-components";

export const Wrapper = styled.div`
  width: ;
  display: flex;
  justify-content: center;
  background-color: white;
  
`;

export const YearWrapper = styled.div`
  display: flex;
  font-size: 1.3rem;
  color: #737373;
`

export const MonthWrapper = styled.div`
  display: flex;
  color: #1a1a1a;
  font-size: 1.5rem;
  justify-content: center;
  padding: 10px 10px 5px 10px;
`

export const Container = styled.div`
  max-width: 71rem;
  min-width: 71rem;

  @media (max-width: 575px) {
    min-width: 22rem;
  }
`;
