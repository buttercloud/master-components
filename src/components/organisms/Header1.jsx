// @flow

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  flex-direction: row-reverse;
  align-items: center;
  padding-right: 40px;
  /*background-color: green;*/
`;

const FacebookIcon = (props) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z"
        fill={props.color ?? "#000"}
      />
    </svg>
  )
}

const InstagramIcon = (props) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7a5 5 0 100 10 5 5 0 000-10zm-3 5a3 3 0 106 0 3 3 0 00-6 0z"
        fill={props.color ?? "#000"}
      />
      <path d="M18 5a1 1 0 100 2 1 1 0 000-2z" fill={props.color ?? "#000"} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 1a4 4 0 00-4 4v14a4 4 0 004 4h14a4 4 0 004-4V5a4 4 0 00-4-4H5zm14 2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"
        fill={props.color ?? "#000"}
      />
    </svg>
  )
}

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

  const socialIcon = (type) => {
    const Facebook = () => (
      <FacebookIcon
        color={darkMode ? '#000000' : '#ffffff'}
      />
    )

    const Instagram = () => (
      <InstagramIcon
        color={darkMode ? '#000000' : '#ffffff'}
      />
    )

    return (
      <div>
        {type === 'facebook' ? Facebook() : Instagram()}
      </div>
    )
  }

  return (
    <Container backgroundColor={backgroundColor}>
      <Logo />
      <SocialIconsContainer>
        {socialIcon('instagram')}
        {socialIcon('facebook')}
      </SocialIconsContainer>
    </Container>
  )
}

Header1.defaultProps = {
  darkMode: false,
}

Header1.propTypes = {
  backgroundColor: String,
  darkMode: Boolean,
}

export default Header1;
