import styled from 'styled-components';

const StyledWeatherCard = styled.div`
  display: grid;
  grid-template: 50% 20% 20%;
  justify-self: center;
  align-self: center;
  margin-bottom: 15px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryColor};

  &:nth-of-type(2) {
    border-left: ${({ theme }) => theme.borders.primaryBorder};
  }
`;

export { StyledWeatherCard };
