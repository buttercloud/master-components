import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { textType, imageType } from '../../customPropTypes/customPropTypes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
const ImageAndContentContainer = styled.div`
  display: flex;
  flex-direction: ${({ swap }) => (swap ? 'row-reverse' : 'row')};
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 0.35;
  padding-left: 10px;
  padding-right: 10px;
`;
const ContentContainer = styled.div`
  display: flex;
  flex: 0.65;
  padding: 5px;
`;
const Image = styled.img`
  width: 100%;
  align-self: flex-start;
  border-radius: 5px;
`;
const Title = styled.p`
  font-size: ${(props) => props.fontSize}rem;
  font-weight: bold;
  margin: 0;
  color: ${(props) => props.color};
`;
const Subtitle = styled.p`
  font-size: ${(props) => props.fontSize}rem;
  color: ${(props) => props.color};
  color: ${(props) => props.color};
  margin: 0;
`;
const Content = styled.p`
  font-size: ${(props) => props.fontSize}rem;
  color: ${(props) => props.color};
  margin: 0;
`;
const Separator = styled.hr`
  width: 10%;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 2px solid ${(props) => props.color};
  border-radius: 5px;
`;

/**
* Content block with title, image and text.
*/
const TitleImageAndText = (props) => {
  const {
    image,
    title,
    subtitle,
    content,
    separatorColor,
    swapImageAndContent,
  } = props;

  const defaults = TitleImageAndText.defaultProps;

  return (
    <Container>
      <TitleContainer>
        <Title
          color={title.color || defaults.title.color}
          fontSize={title.fontSize || defaults.title.fontSize}
          textAlign={title.textAlign || defaults.title.textAlign}
          fontFamily={title.fontFamily || defaults.title.fontFamily}
        >
          {title.text}
        </Title>
        <Subtitle
          color={subtitle.color || defaults.subtitle.color}
          fontSize={subtitle.fontSize || defaults.subtitle.fontSize}
          textAlign={subtitle.textAlign || defaults.subtitle.textAlign}
          fontFamily={subtitle.fontFamily || defaults.subtitle.fontFamily}
        >
          {subtitle.text}
        </Subtitle>
        <Separator color={separatorColor} />
      </TitleContainer>
      <ImageAndContentContainer swap={swapImageAndContent}>
        <ImageContainer>
          <Image src={image?.url} alt={image?.alt} />
        </ImageContainer>
        <ContentContainer>
          <Content
            color={content.color || defaults.content.color}
            fontSize={content.fontSize || defaults.content.fontSize}
            textAlign={content.textAlign || defaults.content.textAlign}
            fontFamily={content.fontFamily || defaults.content.fontFamily}
          >
            {content.text}
          </Content>
        </ContentContainer>
      </ImageAndContentContainer>
    </Container>
  );
};

TitleImageAndText.defaultProps = {
  title: {
    text: '',
    color: '#000',
    fontSize: 1.7,
    textAlign: 'center',
    fontFamily: 'inherit',
  },
  subtitle: {
    text: '',
    color: 'gray',
    fontSize: 1,
    textAlign: 'center',
    fontFamily: 'inherit',
  },
  content: {
    text: '',
    color: 'gray',
    fontSize: 1.1,
    textAlign: 'center',
    fontFamily: 'inherit',
  },
  separatorColor: 'orange',
  swapImageAndContent: false,
};

TitleImageAndText.propTypes = {
  /**
  * Image url.
  */
  image: imageType.isRequired,
  /**
  * The main title.
  */
  title: textType,
  /**
  * Secondary title.
  */
  subtitle: textType,
  /**
  * Content block.
  */
  content: textType,
  /**
  * Separator color.
  */
  separatorColor: PropTypes.string,
  /**
   * Make image on the right and content on left.
   */
  swapImageAndContent: PropTypes.bool,
};

export default TitleImageAndText;
