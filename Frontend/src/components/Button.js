import React, { Component } from 'react';
import styled from 'styled-components';
import Color from 'color';

function getColorFromType(props) {
  const themeToColor = {
    primary: props.theme.palette.primary,
    accent: props.theme.palette.accent1,
    warning: props.theme.palette.warning,
    success: props.theme.palette.success,
  };
  return themeToColor[props.btnType]
    ? themeToColor[props.btnType]
    : props.theme.palette.accent2;
}
function getBackgroundColor(props) {
  if (props.inverted) return 'transparent';
  return getColorFromType(props);
}

function getTextColor(props) {
  return props.inverted
    ? getColorFromType(props)
    : props.theme.palette.alternateText;
}

const Button = styled.button`
  background-color: ${props => getBackgroundColor(props)};
  color: ${props => getTextColor(props)};
  box-shadow: none;
  font-size: 14px;
  font-weight: normal;
  padding: 11px 16px;
  border: 1px solid;
  border-color: ${props => getColorFromType(props)};
  border-radius: 2px;
  box-sizing: border-box;
  transition: box-shadow -webkit-text-stroke 0.15s ease-in-out;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${props =>
      Color(getBackgroundColor(props))
        .darken(0.3)
        .toString()};
    box-shadow: ${props =>
      props.inverted
        ? `inset 0 0 transparent, 0 0 0 1px ${getTextColor(props)}`
        : 'none'};
    filter: ${props => (!props.inverted ? 'contrast(1.1)' : 'none')};
    cursor: pointer;
    -webkit-text-stroke: 0.02em ${props => getTextColor(props)};
  }

  &:disabled {
    filter: opacity(0.3);
  }
`;

class ButtonClass extends Component {
  render() {
    return (
      <Button
        className={this.props.className + ' clickable'}
        onClick={this.props.onClick}
        btnType={this.props.btnType}
        inverted={this.props.inverted}
        {...this.props}
      >
        {this.props.children}
      </Button>
    );
  }
}

export default ButtonClass;
