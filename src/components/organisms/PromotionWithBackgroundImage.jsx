import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${(props) => props.imgUrl}) no-repeat center center;
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: darken;
  padding: 80px 20px;
  width: 100%;
`;
const Title = styled.h5`
  color: palevioletred;
  font-weight: 700;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}rem;
`;
const Subtitle = styled.h2`
  color: white;
  font-weight: 700;
  margin-top: 0;
  color: ${(props) => props.color} !important;
  font-size: ${(props) => props.fontSize}rem;
`;
const Description = styled.p`
  text-align: center;
  color: white;
  margin-top: 0;
  margin-bottom: 20px;
  font-size: ${(props) => props.fontSize}rem;
  color: ${(props) => props.color} !important;
`;
const ActionButton = styled.a`
  position: relative;
  color: ${(props) => props.color} !important;
  background-color: ${(props) => props.backgroundColor};
  border: 0;
  border-radius: 25px;
  padding: 12px 30px;
  box-shadow: none;
  text-decoration: none !important;
  cursor: pointer;
  font-size: ${(props) => props.fontSize}rem;
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
    actionButtonText,
    backgroundImage,
    actionButtonUrl,

    titleFontSize,
    titleColor,
    subtitleFontSize,
    subtitleColor,
    descriptionFontSize,
    descriptionColor,
    actionButtonTextColor,
    actionButtonFontSize,
    actionButtonBackgroundColor,
  } = props;

  return (
    <Container imgUrl={backgroundImage.url}>
      <Title color={titleColor} fontSize={titleFontSize}>
        {title}
      </Title>
      <Subtitle color={subtitleColor} fontSize={subtitleFontSize}>
        {subtitle}
      </Subtitle>
      <Description color={descriptionColor} fontSize={descriptionFontSize}>
        {description}
      </Description>
      <ActionButton
        href={actionButtonUrl}
        color={actionButtonTextColor}
        backgroundColor={actionButtonBackgroundColor}
        fontSize={actionButtonFontSize}
      >
        {actionButtonText}
      </ActionButton>
    </Container>
  );
};

PromotionWithBackgroundImage.defaultProps = {
  title: '',
  subtitle: '',
  description: '',
  actionButtonText: 'ORDER ONLINE',
  actionButtonUrl: '#',
  backgroundImage: {
    url: '',
    alt: '',
  },

  // styles
  titleColor: '#fff',
  titleFontSize: 1,
  subtitleColor: '#fff',
  subtitleFontSize: 1.9,
  descriptionColor: '#fff',
  descriptionFontSize: 1.1,
  actionButtonTextColor: '#fff',
  actionButtonFontSize: 0.9,
  actionButtonBackgroundColor: 'palevioletred',
};

PromotionWithBackgroundImage.propTypes = {
  /**
  * Main title.
  */
  title: PropTypes.string,
  /**
  * Main title color.
  */
  titleColor: PropTypes.string,
  /**
  * Main title font size.
  */
  titleFontSize: PropTypes.number,
  /**
  * Secondary title.
  */
  subtitle: PropTypes.string,
  /**
  * Secondary color.
  */
  subtitleColor: PropTypes.string,
  /**
  * Secondary font size.
  */
  subtitleFontSize: PropTypes.number,
  /**
  * Description.
  */
  description: PropTypes.string,
  /**
  * Description color.
  */
  descriptionColor: PropTypes.number,
  /**
  * Description font size.
  */
  descriptionFontSize: PropTypes.number,
  /**
  * Action button text.
  */
  actionButtonText: PropTypes.string,
  /**
  * Action button text color.
  */
  actionButtonTextColor: PropTypes.string,
  /**
  * Action button font size.
  */
  actionButtonFontSize: PropTypes.number,
  /**
  * Action button background color.
  */
  actionButtonBackgroundColor: PropTypes.string,
  /**
  * Action button url.
  */
  actionButtonUrl: PropTypes.string,
  /**
  * Background image.
  */
  backgroundImage: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
  }),
};

export default PromotionWithBackgroundImage;
