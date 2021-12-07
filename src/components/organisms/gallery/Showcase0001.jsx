import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  StyledContainer,
  StyledButton,
  StyledParagraph,
} from '../../assets/customStyledComponents';
import {
  textType,
  imageType,
  buttonType,
  backgroundType,
} from '../../../customPropTypes/customPropTypes';
import Showcase0001Icon from './Showcase0001.icon';

const Container = styled(StyledContainer)`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: inherit;
  width: 100%;
  max-width: 1200px;
`;
const Title = styled(StyledParagraph)`
  margin: 30px 0;
`;
const CallToAction = styled(StyledButton)`
  border-radius: 25px;
  padding: 25px;
  border: 1px solid black;
  margin: 15px 0;
  align-self: flex-start;
`;
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  max-width: 1200px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F8F8F8;
  border-radius: 20px;
  width: 100%;
  margin-bottom: 30px;
  @media (min-width: 600px) and (max-width: 1023px) {
    width: 48%;
  }
  @media (min-width: 1024px) {
    width: 32%;
  }
`;
const CardImg = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-top-right-radius: inherit;
  border-top-left-radius: inherit;
`;
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;
const CardTitle = styled(StyledParagraph)`
  margin-top: 20px;
`;
const CardSubtitle = styled(StyledParagraph)`
  margin-bottom: 20px;
`;
const CardDescription = styled(StyledParagraph)`
  margin-bottom: 40px;
`;
const CardButton = styled(StyledButton)`
  text-decoration: underline;
`;

const Showcase0001 = (props) => {
  const {
    background,
    title,
    callToActionButton,
    items,
  } = props;

  return (
    <Container customProps={background}>
      <InnerContainer>
        <Title customProps={title}>
          {title.text}
        </Title>
        <CardsContainer>
          {
            items?.map((item) => (
              <Card
                key={item.key}
                id={item.id}
              >
                <CardImg src={item.image?.src} alt={item.image?.alt} />
                <CardInfo>
                  <CardTitle customProps={item.title}>
                    {item.title?.text}
                  </CardTitle>
                  <CardSubtitle customProps={item.subtitle}>
                    {item.subtitle?.text}
                  </CardSubtitle>
                  <CardDescription customProps={item.description}>
                    {item.description?.text}
                  </CardDescription>
                  <CardButton customProps={item.callToActionButton}>
                    {item.callToActionButton?.text}
                  </CardButton>
                </CardInfo>
              </Card>
            ))
          }
        </CardsContainer>
        <CallToAction customProps={callToActionButton}>
          {callToActionButton.text}
        </CallToAction>
      </InnerContainer>
    </Container>
  );
};

Showcase0001.icon = Showcase0001Icon;

Showcase0001.defaultProps = {
  background: {},
  title: {},
  callToActionButton: {},
  items: [],
};

Showcase0001.propTypes = {
  /**
   * Background prop for background.
   */
  background: backgroundType,
  /**
   * Text prop for title.
   */
  title: textType,
  /**
   * Button prop for callToActionButton.
   */
  callToActionButton: buttonType,
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
     * Item title.
     */
    title: textType,
    /**
     * Item subtitle
     */
    subtitle: textType,
    /**
     * Item description
     */
    description: textType,
    /**
     * Item call to action button
     */
    callToActionButton: buttonType,
  })),
};

export default Showcase0001;
