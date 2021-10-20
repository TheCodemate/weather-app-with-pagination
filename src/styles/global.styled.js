import styled from 'styled-components';

const FlexCenterdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  color: ${({ theme }) => theme.colors.primaryColor};
`;

const DataContainerRow = styled(FlexCenterdContainer)`
  flex-direction: row;
`;

const DataContainerColumn = styled(FlexCenterdContainer)`
  flex-direction: column;
`;

export { DataContainerColumn, DataContainerRow };
