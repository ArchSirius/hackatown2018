import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  outline: none;
  appearance: none;
  background-color: transparent;
  border: 1.5px solid ${props => props.theme.palette.accent2};
  border-radius: 3px;
  font-size: 16px;
  transition: border 0.25s ease-in-out;

  &:focus {
    border-color: ${props => props.theme.palette.primary1};
    outline: 0;
    box-shadow: none;
  }
`;

const Input = props => <StyledInput {...props} />;

export default Input;
