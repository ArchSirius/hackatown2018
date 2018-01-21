import styled from 'styled-components';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userOperations } from '../redux/modules/user';

const FooterWrapper = styled.div`
  background-color: ${props => props.theme.palette.footer};
  color: ${props => props.theme.palette.white};
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SuperPowerBtn = styled.span`
  color: #393939;
  font-size: 14px;
`;

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        © 2018 Hackatown - Made by the Trivials<SuperPowerBtn
          onClick={this.props.superMagicButton}
        >
          Reset
        </SuperPowerBtn>
      </FooterWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  superMagicButton: () => dispatch(userOperations.superMagicButton())
});

const FooterCtn = connect(null, mapDispatchToProps)(Footer);

export default FooterCtn;
