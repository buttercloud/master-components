import React from 'react';
import styled from 'styled-components';

import { textType, imageType } from '../../customPropTypes/customPropTypes';

const Container = styled.div`
  display: block;
  position: relative;
  height: 100vh;
  width: 100%;
  background: url(${({ img }) => img}) no-repeat center center;
  background-size: cover;
`;
const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  box-sizing: border-box;
  max-width: 40%;
`;
const LogoContainer = styled.div`
  opacity: 1;
  text-align: center;
  text-rendering: optimizeLegibility;
`;
const Title = styled.h1`
  opacity: 1;
  color: ${({ color }) => color};
  text-transform: uppercase;
  font-family: raleway, sans-serif;
  font-size: ${({ fontSize }) => fontSize}rem;
  text-align: center;
  font-weight: 800;
  margin-top: 20px;
  margin-bottom: 10px;
  line-height: 1.1;
  margin: 0.67rem 0;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  text-align: ${({ textAlign }) => textAlign};
`;
const Subtitle = styled.h2`
  opacity: 1;
  text-transform: none;
  font-weight: 400;
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize}rem;
  font-family: 'raleway', sans-serif;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
  line-height: 1.1;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  text-align: ${({ textAlign }) => textAlign};
`;

/**
* Header with a background cover image and centered content
*/
const BackgroundImageHeader = (props) => {
  const {
    title,
    subtitle,
    backgroundImage,
    logo,
  } = props;

  const defaults = BackgroundImageHeader.defaultProps;

  return (
    <Container img={backgroundImage?.src}>
      <ContentContainer>
        <LogoContainer>
          <img src={logo?.src} alt={logo?.alt} />
        </LogoContainer>
        <Title
          color={title.color || defaults.title.color}
          fontSize={title.fontSize || defaults.title.fontSize}
          textAlign={title.textAlign || defaults.title.textAlign}
        >
          {title.text}
        </Title>
        <Subtitle
          color={subtitle.color || defaults.subtitle.color}
          fontSize={subtitle.fontSize || defaults.subtitle.fontSize}
          textAlign={subtitle.textAlign || defaults.subtitle.textAlign}
        >
          {subtitle.text}
        </Subtitle>
      </ContentContainer>
    </Container>
  );
};

BackgroundImageHeader.defaultProps = {
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

BackgroundImageHeader.propTypes = {
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

export default BackgroundImageHeader;
