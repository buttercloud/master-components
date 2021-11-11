import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SocialButtons, { socialMediaType } from '../molecules/SocialButtons';
import { imageType } from '../../customPropTypes/customPropTypes';

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
* A header component with logo and social icons.
*/
const HeaderWithLogoAndSocial = (props) => {
  const {
    logo,
    socialMedia,
    background,
  } = props;

  return (
    <Container backgroundColor={background?.backgroundColor}>
      <LogoContainer>
        <Image src={logo?.src} alt={logo?.alt} />
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

HeaderWithLogoAndSocial.defaultProps = {
  background: {
    backgroundColor: '#000000',
  },
  socialMedia: [
    {
      type: 'instagram',
      url: '',
      color: '#000',
      text: 'Instagram',
    },
  ],
};

HeaderWithLogoAndSocial.propTypes = {
  /**
  * Logo to display on the left.
  */
  logo: imageType.isRequired,
  /**
  * Header background color.
  */
  background: PropTypes.shape({
    backgroundColor: PropTypes.string,
  }),
  /**
   * Social media icons to show
   */
  socialMedia: socialMediaType,
};

export default HeaderWithLogoAndSocial;
