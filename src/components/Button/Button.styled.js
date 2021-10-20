import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: 100px;
  height: 30px;
  margin: 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryColor};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.secondaryColor};

  &:active {
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    color: ${({ theme }) => theme.colors.primaryColor};
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};
  }
`;

export { ButtonStyled };
