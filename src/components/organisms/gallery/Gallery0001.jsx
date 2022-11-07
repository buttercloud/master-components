import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {
  backgroundType,
  buttonType,
  imageType,
  textType,
} from '../../../customPropTypes/customPropTypes';
import {
  StyledButton,
  StyledContainer,
  StyledImage,
  StyledParagraph,
} from '../../assets/customStyledComponents';
import Gallery0001Icon from './Gallery0001.icon';

const Container = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Title = styled(StyledParagraph)`
  margin: 30px 0;
  letter-spacing: 0px;
  width: 90%;
  @media (min-width: 700px) {
    width: 60%;
  }
`;
const Subtitle = styled(StyledParagraph)`
  margin-bottom: 50px;
  width: 90%;
  @media (min-width: 700px) {
    width: 60%;
  }
`;
const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  width: 100%;
  max-width: 1200px;
`;
const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin-bottom: 30px;
  width: 100%;
  border-radius: 30px;
  @media (min-width: 400px) and (max-width: 699px) {
    width: 48%;
  }
  @media (min-width: 700px) and (max-width: 1023px) {
    width: 32%;
  }
  @media (min-width: 1024px) {
    width: 23%;
  }
`;
const CardImage = styled(StyledImage)`
  width: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
const CardText = styled(StyledParagraph)`
  position: absolute;
  bottom: 50px;
  left: 20px;
`;
const CardButton = styled(StyledButton)`
  position: absolute;
  bottom: 20px;
  left: 20px;
  text-decoration: underline;
`;

const Gallery0001 = (props) => {
  const {
    background,
    title,
    subtitle,
    items,
  } = props;

  return (
    <Container customProps={background}>
      <Title customProps={title}>
        {title.text}
      </Title>
      <Subtitle customProps={subtitle}>
        {subtitle.text}
      </Subtitle>
      <Items>
        {
          items?.map((item) => (
            <Card
              key={item.id}
              id={item.id}
            >
              <CardImage
                src={item.image?.src}
                alt={item.image?.alt}
                customProps={item.image}
              />
              <CardText customProps={item.p87a657}>
                {item.p87a657?.text}
              </CardText>
              <CardButton customProps={item.button163210}>
                {item.button163210?.text}
              </CardButton>
            </Card>
          ))
        }
      </Items>
    </Container>
  );
};

Gallery0001.icon = Gallery0001Icon;

Gallery0001.defaultProps = {
  background: {},
  title: {},
  subtitle: {},
  items: [],
};

Gallery0001.propTypes = {
  /**
   * Background prop for background.
   */
  background: backgroundType,
  /**
   * Text prop for title.
   */
  title: textType,
  /**
   * Text prop for subtitle.
   */
  subtitle: textType,
  /**
   * Items array
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Item image
     */
    image: imageType,
    /**
     * Item text.
     */
    p87a657: textType,
    /**
     * Item button
     */
    button163210: buttonType,
  })),
};

export default Gallery0001;
