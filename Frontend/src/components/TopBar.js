import styled from 'styled-components';
import React from 'react';

const TopBarWrapper = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.palette.primary};
  color: ${props => props.theme.palette.white};
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  padding: 0 40px;
`;
const Logo = styled.img`
  padding: 0 10px;
  height: 30px;
`;
const AppName = styled.div`
  padding: 2px;
  &:hover {
    cursor: default;
  }
  text-transform: uppercase;
`;

const TopBar = ({ links }) => (
  <TopBarWrapper>
    <Links>
      <Logo src="/assets/logo.png" alt="Test" />
      <AppName>CAREMMUNITY</AppName>
    </Links>
    <Links>{links}</Links>
  </TopBarWrapper>
);

export default TopBar;
