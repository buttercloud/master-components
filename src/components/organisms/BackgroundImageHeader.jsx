// @flow
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: block;
  position: relative;
  height: 100vh;
  width: 100%;
  background: url(${(props) => props.imgUrl}) no-repeat center center;
  background-size: cover;
`;
const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  box-sizing: border-box;
`;
const LogoContainer = styled.div`
  opacity: 1;
  text-align: center;
  text-rendering: optimizeLegibility;
`;
const Title = styled.h1`
  opacity: 1;
  color: ${(props) => props.color};
  text-transform: uppercase;
  font-family: raleway, sans-serif;
  font-size: 4.5rem;
  text-align: center;
  font-weight: 800;
  margin-top: 20px;
  margin-bottom: 10px;
  line-height: 1.1;
  margin: 0.67rem 0;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
`;
const Subtitle = styled.h2`
  opacity: 1;
  text-transform: none;
  font-weight: 400;
  color: ${(props) => props.color};
  font-size: 2rem;
  font-family: 'raleway', sans-serif;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
  line-height: 1.1;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
`;

/**
* Header with a background cover image and centered content
*/
const BackgroundImageHeader = (props) => {
  const {
    title,
    subtitle,
    backgroundImageUrl,
    logoUrl,
    titleColor,
    subtitleColor,
  } = props;

  return (
    <Container imgUrl={backgroundImageUrl}>
      <ContentContainer>
        <LogoContainer>
          <img src={logoUrl} alt="" />
        </LogoContainer>
        <Title color={titleColor}>
          {title}
        </Title>
        <Subtitle color={subtitleColor}>
          {subtitle}
        </Subtitle>
      </ContentContainer>
    </Container>
  );
};

BackgroundImageHeader.defaultProps = {
  title: '',
  subtitle: '',
  logoUrl: '',
  titleColor: '#fff',
  subtitleColor: '#e6e6e6',
};

BackgroundImageHeader.propTypes = {
  /**
  * Title to appear at the center.
  */
  title: PropTypes.string,
  /**
  * Subtitle.
  */
  subtitle: PropTypes.string,
  /**
  * Url of the image to display in the background.
  */
  backgroundImageUrl: PropTypes.string.isRequired,
  /**
  * Optional centered logo above the title.
  */
  logoUrl: PropTypes.string,
  /**
  * Title color.
  */
  titleColor: PropTypes.string,
  /**
  * Subtitle color.
  */
  subtitleColor: PropTypes.string,
};

export default BackgroundImageHeader;
