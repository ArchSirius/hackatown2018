import styled, { withTheme } from 'styled-components';
import { IndexLink } from 'react-router';
import React from 'react';

const FlattenLinks = styled.div`display: flex;`;

const StyledLinkTab = styled(IndexLink)`
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.1s ease-in-out;
  color: ${props => props.theme.palette.white};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.palette.accent1};
  }
`;

const activeLink = theme => {
  return {
    borderBottom: `2px solid ${theme.palette.accent1}`,
    color: theme.palette.accent1,
  };
};

const StyledLinkText = styled.p`
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 14px;
`;

const CarePoints = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
`;
const CarePointsImage = styled.img`
  margin: 5px;
  height: 25px;
`;


const LinkTab = ({ theme, logout, currentUser }) => (
  <FlattenLinks>
    <StyledLinkTab
      to={'/requests/active'}
      style={{ textDecoration: 'none' }}
      activeStyle={activeLink(theme)}
    >
      <StyledLinkText>Active Requests</StyledLinkText>
    </StyledLinkTab>
    <StyledLinkTab
      to={'/requests'}
      style={{ textDecoration: 'none' }}
      activeStyle={activeLink(theme)}
    >
      <StyledLinkText>Give your kindness</StyledLinkText>
    </StyledLinkTab>
    <CarePoints>
      <CarePointsImage
        src="/assets/skills/carePointsWhite.png"
        alt=""
      />
      {currentUser ? currentUser.points : '-'}
    </CarePoints>
  </FlattenLinks>
);

export default withTheme(LinkTab);
