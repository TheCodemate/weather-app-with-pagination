import styled from 'styled-components';
import { DataContainerColumn } from 'styles';

const MainDisplayContainer = styled.div`
  display: grid;
  grid-template: 15% 20% 30% 5% 20%/ 30% 30% 30%;
  justify-content: center;
  align-items: center;
  flex: 3;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  font-size: 7rem;
  color: ${({ theme }) => theme.colors.primaryColor};

  & > img {
    justify-self: center;
    align-self: center;
    grid-column: 2/3;
    grid-row: 2/3;
  }
`;

const Temperature = styled.div`
  grid-column: 2/3;
  grid-row: 3/4;
  justify-self: center;
  align-self: center;
`;

const DayName = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  justify-self: center;
  align-self: center;
  font-size: 2rem;
`;

const Description = styled.span`
  text-align: center;
  grid-column: 1/4;
  grid-row: 4/5;
  font-size: 1.5rem;
`;

const Date = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  justify-self: center;
  align-self: center;
  font-size: 1rem;
`;

const Container = styled.div`
  justify-self: stretch;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  grid-row: 5/6;
  font-size: 1rem;

  &:nth-of-type(1) {
    grid-column: 1/2;
  }

  &:nth-of-type(2) {
    grid-column: 2/3;
    border-left: ${({ theme }) => theme.borders.primaryBorder};
    border-right: ${({ theme }) => theme.borders.primaryBorder};
  }
  &:nth-of-type(3) {
    grid-column: 3/4;
  }

  > span {
    text-align: center;
  }
`;
const WeatherDetailContainer = styled(DataContainerColumn)`
  justify-self: stretch;
  align-self: stretch;
  grid-row: 5/6;
  font-size: 1rem;

  &:nth-of-type(1) {
    grid-column: 1/2;
  }
  &:nth-of-type(2) {
    grid-column: 2/3;
  }
  &:nth-of-type(3) {
    grid-column: 3/4;
  }

  > span {
    text-align: center;
  }
`;

export {
  Date,
  DayName,
  Description,
  MainDisplayContainer,
  Temperature,
  Container,
  WeatherDetailContainer
};
