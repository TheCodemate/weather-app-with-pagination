import styled from 'styled-components';

const StyledCardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100%;
  width: 100%;
  min-width: 375px;
`;

const StyledWeatherDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  width: 100%;
  height: 100%;
`;

export { StyledWeatherDisplay, StyledCardsWrapper };
