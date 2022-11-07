import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {
  backgroundType,
  imageType,
  textType,
} from '../../../customPropTypes/customPropTypes';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  @media ${device.mobileS} {
    /*flex-direction: column;*/
  }
`;
const BackgroundColorContainer = styled(Container)`
  background-color: ${(props) => props.backgroundColor};
`;
const ElementContainer = styled.div`
  display: flex;
  margin: auto;
  width: 30%;
  flex-direction: column;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Image = styled.img`
  max-width: 100%;
  margin-bottom: 10px;
`;
const Title = styled.h5`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}rem;
  margin: 15px 0;
`;
const Description = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}rem;
  text-align: center;
  margin: 0;
`;

const ImagesGridWithText = (props) => {
  const {
    content,
    background,
  } = props;

  return (
    <BackgroundColorContainer
      backgroundColor={background.backgroundColor}
    >
      {
        content?.map((item) => (
          <ElementContainer>
            {
              item.image?.url
                ? <Image src={item.image.url} alt={item.image.alt} />
                : null
            }
            <Title
              color={item.title?.color || '#000'}
              fontSize={item.title?.fontSize || 1.7}
            >
              {item.title?.text}
            </Title>
            <Description
              color={item.description?.color || '#000'}
              fontSize={item.description?.fontSize || 1}
            >
              {item.description?.text}
            </Description>
          </ElementContainer>
        ))
      }
    </BackgroundColorContainer>
  );
};

ImagesGridWithText.defaultProps = {
  background: {
    backgroundColor: '#fff',
  },
};

ImagesGridWithText.propTypes = {
  /**
  * Image, title and description
  */
  content: PropTypes.arrayOf(PropTypes.shape({
    title: textType.isRequired,
    description: textType,
    image: imageType,
  })).isRequired,
  /**
  * Background styles
  */
  background: backgroundType,
};

export default ImagesGridWithText;
