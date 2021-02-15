// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FacebookButton from '../atoms/FacebookButton';
import InstagramButton from '../atoms/InstagramButton';

// TODO: change name later

// A simple header component
// Logo on the left
// social icons on the right

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 200px;
  /*width: 100%;*
  /*textAlign: 'center',*/
  background-color: ${props => (props.backgroundColor)};
`;

const LogoContainer = styled.div`
  display: flex;
  flex: 0.50;
  align-items: center;
  padding-left: 40px;
  /*background-color: red;*/
`;

const SocialIconsContainer = styled.div`
  display: flex;
  flex: 0.50;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 40px;
  /*background-color: green;*/
`;

const Header1 = (props) => {
  const {
    backgroundColor,
    facebookPageUrl,
    instagramPageUrl,
    darkMode,
    logoUrl,
  } = props;

  const Logo = () => (
    <LogoContainer>
      <img src={logoUrl} />
    </LogoContainer>
  )

  const SocialInfo = () => {
    return (
      <SocialIconsContainer>
        <FacebookButton
          pageUrl={facebookPageUrl}
          color={darkMode ? '#000000' : "#ffffff"}
        />
        <InstagramButton
          pageUrl={instagramPageUrl}
          color={darkMode ? '#000000' : '#ffffff'}
        />
      </SocialIconsContainer>
    )
  }

  return (
    <Container backgroundColor={backgroundColor}>
      <Logo />
      <SocialInfo />
    </Container>
  )
}

Header1.defaultProps = {
  backgroundColor: '#000000',
  darkMode: false,
}

Header1.propTypes = {
  backgroundColor: String,
  darkMode: Boolean,
  facebookPageUrl: String,
  instagramPageUrl: String,
  logoUrl: String,
};

export default Header1;
