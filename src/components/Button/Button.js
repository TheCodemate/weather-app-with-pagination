import React from 'react';
import { ButtonStyled } from './Button.styled';

const Button = ({ action, description }) => {
  return <ButtonStyled onClick={() => action()}>{description}</ButtonStyled>;
};

export default Button;
