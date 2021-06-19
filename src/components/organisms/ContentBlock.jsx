import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  font-size: 1.7rem;
  font-weight: bold;
  margin: 0px;
  color: ${(props) => props.color};
`;
const Subtitle = styled.p`
  font-size: 1rem;
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
* Content block. centered title, image on one side and text on the other
*/
const ContentBlock = (props) => {
  const {
    imgUrl,
    title,
    subtitle,
    content,
    contentColor,
    contentFontSize,
    titleColor,
    subtitleColor,
    separatorColor,
  } = props;

  return (
    <Container>
      <TitleContainer>
        <Title color={titleColor}>
          {title}
        </Title>
        <Subtitle color={subtitleColor}>
          {subtitle}
        </Subtitle>
        <Separator color={separatorColor} />
      </TitleContainer>
      <ImageAndContentContainer>
        <ImageContainer>
          <Image src={imgUrl} alt="" />
        </ImageContainer>
        <ContentContainer>
          <Content fontSize={contentFontSize} color={contentColor}>
            {content}
          </Content>
        </ContentContainer>
      </ImageAndContentContainer>
    </Container>
  );
};

ContentBlock.defaultProps = {
  title: '',
  subtitle: '',
  contentColor: 'gray',
  contentFontSize: 1.1,
  titleColor: 'black',
  subtitleColor: 'gray',
  separatorColor: 'orange',
};

ContentBlock.propTypes = {
  /**
  * Image url.
  */
  imgUrl: PropTypes.string.isRequired,
  /**
  * The main title.
  */
  title: PropTypes.string,
  /**
  * Secondary title.
  */
  subtitle: PropTypes.string,
  /**
  * Content block.
  */
  content: PropTypes.string.isRequired,
  /**
  * Content color.
  */
  contentColor: PropTypes.string,
  /**
  * Content font size.
  */
  contentFontSize: PropTypes.number,
  /**
  * Main title color.
  */
  titleColor: PropTypes.string,
  /**
  * Secondary title color.
  */
  subtitleColor: PropTypes.string,
  /**
  * Separator color.
  */
  separatorColor: PropTypes.string,
};

export default ContentBlock;
