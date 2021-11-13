import React from 'react';
import styled from 'styled-components';

import { StyledHeader, StyledImage } from '../../assets/customStyledComponents';
import SocialButtons, { socialMediaType } from '../../molecules/SocialButtons';
import { backgroundType, imageType } from '../../../customPropTypes/customPropTypes';
import Header0001Icon from './Header0001.icon';

const Container = styled(StyledHeader)`
  display: flex;
  flex-direction: row;
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

/**
* A header component with logo and social icons.
*/
const Header0001 = (props) => {
  const {
    logo,
    socialMedia,
    background,
  } = props;

  return (
    <Container customProps={background}>
      <LogoContainer>
        <StyledImage
          src={logo?.src}
          alt={logo?.alt}
          customProps={logo}
        />
      </LogoContainer>
      <SocialIconsContainer>
        <SocialButtons
          socialMedia={socialMedia}
          alignment="row"
        />
      </SocialIconsContainer>
    </Container>
  );
};

Header0001.icon = Header0001Icon;

Header0001.defaultProps = {
  background: {
    styles: {
      backgroundColor: '#000000',
    },
  },
  logo: {},
  socialMedia: [
    {
      type: 'instagram',
      url: '',
      color: '#000',
      text: 'Instagram',
    },
  ],
};

Header0001.propTypes = {
  /**
  * Logo to display on the left.
  */
  logo: imageType,
  /**
  * Header background color.
  */
  background: backgroundType,
  /**
   * Social media icons to show
   */
  socialMedia: socialMediaType,
};

export default Header0001;
