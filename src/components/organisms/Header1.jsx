import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SocialButton from '../atoms/SocialButton';

// TODO: change name later

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 200px;
  background-color: ${(props) => (props.backgroundColor)};
`;
const LogoContainer = styled.div`
  display: flex;
  flex: 0.50;
  align-items: center;
  padding: 15px;
`;
const SocialIconsContainer = styled.div`
  display: flex;
  flex: 0.50;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 40px;
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

/**
* A header component with logo on the left and social icons on the right
*/
const Header1 = (props) => {
  const {
    backgroundColor,
    facebookPageUrl,
    instagramPageUrl,
    facebookButtonColor,
    instagramButtonColor,
    logoUrl,
  } = props;

  const Logo = () => (
    <LogoContainer>
      <Image src={logoUrl} alt="logo" />
    </LogoContainer>
  );

  const SocialInfo = () => (
    <SocialIconsContainer>
      <SocialButton
        type="facebook"
        url={facebookPageUrl}
        color={facebookButtonColor}
      />
      <SocialButton
        type="instagram"
        url={instagramPageUrl}
        color={instagramButtonColor}
      />
    </SocialIconsContainer>
  );

  return (
    <Container backgroundColor={backgroundColor}>
      <Logo />
      <SocialInfo />
    </Container>
  );
};

Header1.defaultProps = {
  backgroundColor: '#000000',
  facebookButtonColor: '#000000',
  instagramButtonColor: '#000000',
};

Header1.propTypes = {
  /**
  * Logo url to display on the left.
  */
  logoUrl: PropTypes.string.isRequired,
  /**
  * Facebook page url.
  */
  facebookPageUrl: PropTypes.string.isRequired,
  /**
  * Instagram page url.
  */
  instagramPageUrl: PropTypes.string.isRequired,
  /**
  * Custom color for the facebook social button.
  */
  facebookButtonColor: PropTypes.string,
  /**
  * Custom color for the instagram social button.
  */
  instagramButtonColor: PropTypes.string,
  /**
  * Header background color.
  */
  backgroundColor: PropTypes.string,
};

export default Header1;
