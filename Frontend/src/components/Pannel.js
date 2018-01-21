import React, { Component } from 'react';
import styled from 'styled-components';

const shadowLevels = {
  1: '0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12)',
  2: '0 1px 5px 0 rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12)',
  3: '0 1px 8px 0 rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 3px 3px -2px rgba(0,0,0,.12);',
};

const StyledDiv = styled.div`
  box-shadow: ${props => shadowLevels[props.level]};
  background-color: ${props => props.theme.palette.white};
  color: ${props => props.theme.palette.text};
  padding: 8px;
  border-radius: 4px;
`;

class Pannel extends Component {
  render() {
    return (
      <StyledDiv
        level={this.props.level | 1}
        style={this.props.style}
        className={this.props.className}
      >
        {this.props.children}
      </StyledDiv>
    );
  }
}

export default Pannel;
