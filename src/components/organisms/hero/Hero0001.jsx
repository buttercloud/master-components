import React from 'react';
import styled from 'styled-components';
import {
  StyledContainer,
  StyledImage,
  StyledParagraph,
  StyledButton,
} from '../../assets/customStyledComponents';
import {
  textType,
  backgroundType,
  imageType,
  buttonType,
} from '../../../customPropTypes/customPropTypes';
import Hero0001Icon from './Hero0001.icon';

const Container = styled(StyledContainer)`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (min-width: 820px) {
    flex-direction: row;
  }
`;
const LeftBlock = styled.div`
  flex: 0.5;
`;
const RightBlock = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Image = styled(StyledImage)`
  width: 100%;
  object-fit: cover;
`;
const MainText = styled(StyledParagraph)`
  margin: 20px 0;
  width: 80%;
`;
const SecondaryText = styled(StyledParagraph)`
  margin: 20px 0;
  width: 80%;
`;
const CallToAction = styled(StyledButton)`
  border: 2px solid black;
  padding: 15px 20px;
  border-radius: 20px;
  margin: 20px 0;
`;

const Hero0001 = (props) => {
  const {
    background,
    image,
    mainText,
    secondaryText,
    callToActionButton,
  } = props;

  return (
    <Container customProps={background}>
      <LeftBlock>
        <Image
          src={image?.src}
          alt={image?.alt}
          customProps={image}
        />
      </LeftBlock>
      <RightBlock>
        <MainText customProps={mainText}>
          {mainText?.text}
        </MainText>
        <SecondaryText customProps={secondaryText}>
          {secondaryText?.text}
        </SecondaryText>
        <CallToAction customProps={callToActionButton}>
          {callToActionButton?.text}
        </CallToAction>
      </RightBlock>
    </Container>
  );
};

Hero0001.icon = Hero0001Icon;

Hero0001.defaultProps = {
  background: {},
  image: {},
  mainText: {},
  secondaryText: {},
  callToActionButton: {},
};

Hero0001.propTypes = {
  /**
   * Background prop
   */
  background: backgroundType,
  /**
   * Image on the left
   */
  image: imageType,
  /**
   * Main text on the right
   */
  mainText: textType,
  /**
   * Secondary text on the right
   */
  secondaryText: textType,
  /**
   * Call to action button
   */
  callToActionButton: buttonType,
};

export default Hero0001;
