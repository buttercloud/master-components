import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
const BackgroundImageContainer = styled(Container)`
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  background-size: cover;
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
`;
const Description = styled.p`
  color: ${(props) => props.color};
  text-align: center;
`;

const Features01 = (props) => {
  const {
    content,
    backgroundColor,
    backgroundImage,
    titleColor,
    descriptionColor,
  } = props;

  let MainContainer = BackgroundColorContainer;

  if (backgroundImage) {
    MainContainer = BackgroundImageContainer;
  }

  return (
    <MainContainer
      backgroundColor={backgroundColor}
      imageUrl={backgroundImage}
    >
      {
        content.map((item) => (
          <ElementContainer>
            {
              item.imageUrl
                ? <Image src={item.imageUrl} />
                : null
            }
            <Title color={titleColor}>
              {item.title}
            </Title>
            <Description color={descriptionColor}>
              {item.description}
            </Description>
          </ElementContainer>
        ))
      }
    </MainContainer>
  );
};

Features01.defaultProps = {
  backgroundColor: '#fff',
  backgroundImage: '',
  titleColor: '#000',
  descriptionColor: '#000',
};

Features01.propTypes = {
  /**
  *
  */
  content: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
  })).isRequired,
  /**
  * Background Image that goes on top of the background color
  */
  backgroundImage: PropTypes.string,
  /**
  * Background color to show if image is not provided
  */
  backgroundColor: PropTypes.string,
  /**
  * Custom color for the title
  */
  titleColor: PropTypes.string,
  /**
  * Custom color for the description
  */
  descriptionColor: PropTypes.string,
};

export default Features01;
