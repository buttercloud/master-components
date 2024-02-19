import React from 'react';
import styled from 'styled-components';

import { imageType,textType } from '../../../customPropTypes/customPropTypes';
import {
  StyledContainer,
  StyledH1,
  StyledH2,
  StyledImage,
} from '../../assets/customStyledComponents';
import Header0002Icon from './Header0002.icon';

const Container = styled(StyledContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  width: 100%;
  background: url(${({ img }) => img}) no-repeat center center;
  background-size: cover;
`;
const ContentContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  box-sizing: border-box;
  max-width: 40%;
`;
const LogoContainer = styled.div`
  opacity: 1;
  text-align: center;
`;
const Title = styled(StyledH1)`
  opacity: 1;
  text-transform: uppercase;
  text-align: center;
  font-weight: 800;
  margin-top: 20px;
  margin-bottom: 10px;
  line-height: 1.1;
  margin: 0.67rem 0;
  box-sizing: border-box;
`;
const Subtitle = styled(StyledH2)`
  opacity: 1;
  text-transform: none;
  font-weight: 400;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
  line-height: 1.1;
  box-sizing: border-box;
`;

/**
* Header with a background cover image and centered content
*/
const Header0002 = (props) => {
  const {
    title,
    subtitle,
    backgroundImage,
    logo,
  } = props;

  return (
    <Container img={backgroundImage?.src}>
      <ContentContainer>
        <LogoContainer>
          <StyledImage
            src={logo?.src}
            alt={logo?.alt}
            customProps={logo}
          />
        </LogoContainer>
        <Title customProps={title}>
          {title.text}
        </Title>
        <Subtitle customProps={subtitle}>
          {subtitle.text}
        </Subtitle>
      </ContentContainer>
    </Container>
  );
};

Header0002.icon = Header0002Icon;

Header0002.defaultProps = {
  title: {
    text: '',
    color: '#fff',
    fontSize: 4.5,
    textAlign: 'center',
  },
  subtitle: {
    text: '',
    color: '#e6e6e6',
    fontSize: 2,
    textAlign: 'center',
  },
  logo: {
    src: '',
    alt: '',
  },
  backgroundImage: {
    src: '',
    alt: '',
  },
};

Header0002.propTypes = {
  /**
  * Title to appear at the center.
  */
  title: textType,
  /**
  * Subtitle.
  */
  subtitle: textType,
  /**
  * Image to display in the background.
  */
  backgroundImage: imageType,
  /**
  * Optional centered logo above the title.
  */
  logo: imageType,
};

export default Header0002;
