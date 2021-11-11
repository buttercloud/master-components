import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { textType, imageType, buttonType } from '../../customPropTypes/customPropTypes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  ${({ imgUrl }) => imgUrl && `
    background: url(${imgUrl}) no-repeat center center;
    background-color: rgba(0, 0, 0, 0.6);
    background-blend-mode: darken;
  `}
  padding: 80px 0;
  width: 100%;
`;
const Title = styled.h5`
  font-weight: 700;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}rem;
`;
const Subtitle = styled.h2`
  font-weight: 700;
  margin-top: 0;
  color: ${(props) => props.color} !important;
  font-size: ${(props) => props.fontSize}rem;
`;
const Description = styled.p`
  text-align: center;
  margin: 0 20px 20px 20px;
  font-size: ${(props) => props.fontSize}rem;
  color: ${(props) => props.color} !important;
`;
const ActionButton = styled.button`
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 0;
  border-radius: 25px;
  padding: 12px 30px;
  box-shadow: none;
  text-decoration: none;
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize}rem;
  font-weight: 600;
  margin-top: 20px;
  &:active {
    transform: translateY(1px);
  }
`;

const PromotionWithBackgroundImage = (props) => {
  const {
    title,
    subtitle,
    description,
    actionButton,
    background,
  } = props;

  const defaults = PromotionWithBackgroundImage.defaultProps;

  return (
    <Container
      imgUrl={background?.image?.src}
      backgroundColor={background?.backgroundColor || defaults.background.backgroundColor}
    >
      <Title
        color={title.color || defaults.title.color}
        fontSize={title.fontSize || defaults.title.fontSize}
      >
        {title.text}
      </Title>
      <Subtitle
        color={subtitle.color || defaults.subtitle.color}
        fontSize={subtitle.fontSize || defaults.subtitle.fontSize}
      >
        {subtitle.text}
      </Subtitle>
      <Description
        color={description.color || defaults.description.color}
        fontSize={description.fontSize || defaults.description.fontSize}
      >
        {description.text}
      </Description>
      <ActionButton
        onClick={actionButton.onClick}
        color={actionButton.color || defaults.actionButton.color}
        backgroundColor={actionButton.backgroundColor || defaults.actionButton.backgroundColor}
        fontSize={actionButton.fontSize || defaults.actionButton.fontSize}
      >
        {actionButton.text}
      </ActionButton>
    </Container>
  );
};

PromotionWithBackgroundImage.defaultProps = {
  title: {
    text: '',
    color: '#fff',
    fontSize: 1,
  },
  subtitle: {
    text: '',
    color: '#fff',
    fontSize: 1.9,
  },
  description: {
    text: '',
    color: '#fff',
    fontSize: 1.1,
  },
  actionButton: {
    text: '',
    color: 'palevioletred',
    fontSize: 0.9,
    backgroundColor: 'white',
  },
  background: {
    image: {
      srcz: '',
      alt: '',
    },
    backgroundColor: '#000',
  },
};

PromotionWithBackgroundImage.propTypes = {
  /**
   * Main title.
   */
  title: textType,
  /**
   * Secondary title.
   */
  subtitle: textType,
  /**
   * Description.
   */
  description: textType,
  /**
   * Action button.
   */
  actionButton: buttonType,
  /**
   * Background.
   */
  background: PropTypes.shape({
    image: imageType,
    backgroundColor: PropTypes.string,
  }),
};

export default PromotionWithBackgroundImage;
