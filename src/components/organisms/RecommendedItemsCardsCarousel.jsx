import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dinero from 'dinero.js';
import Carousel from '../molecules/Carousel';
import * as CustomTypes from '../../customPropTypes/customPropTypes';

import CartIcon from '../assets/CartIcon';
import ArrowIcon from '../assets/ArrowIcon';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
`;
const Title = styled.h5`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  margin: 0 auto 15px;
  max-width: 600px;
  text-align: center;
`;
const Subtitle = styled.h2`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  margin: 0 auto 15px;
  max-width: 600px;
  text-align: center;
`;
const Description = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  margin: 0 auto 20px;
  max-width: 600px;
  text-align: center;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: -60px;
  transition:  0.3s;
  background-color: transparent;
  width: 100%;
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover ${ImageContainer} {
    /*transform: translateY(-5px);*/
  }
`;
const CardImage = styled.img`
  max-width: 100%;
  /*height: 250px;*/
  height: auto;
  /*object-fit: cover;*/
  /*padding: 20px 0;*/
`;
const CardBody = styled.div`
  /*display: flex;*/
  /*flex-direction: column;*/
  background-color: #f9f9f9;
  color: #515151;
  border-radius: 8px;
  padding: 70px 20px 20px;
  transition: 0.3s;
  box-shadow: 0 3px 12px 0 rgba(25, 31, 33, 0.1);
`;
const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;
const ItemDescription = styled.p`
  margin: 0;
`;
const ItemTitle = styled.h4`
  color: #1D2228;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 10px;
`;
const ItemPrice = styled.p`
  font-weight: 700;
  color: #1D2228;
  border: 1px solid rgba(0,0,0,.1);
  padding: 5px 15px;
  border-radius: 25px;
`;
const ItemControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
const NavigationArrows = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`;
const Arrow = styled.button`
  margin: 0 10px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid #f9f9f9;
  transition: 0.3s;
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    background-color: ${(props) => props.onHoverBackgroundColor};
    border-color: ${(props) => props.onHoverBackgroundColor};
  }
`;
const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  padding: 8px 20px;
  background-color: palevioletred;
  font-weight: 600;
  border: 0;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.backgroundColor};
  &:active {
    transform: translateY(1px);
  }
`;
const CartIconContainer = styled.div`
  margin-left: 10px;
`;

const RecommendedItemsCardsCarousel = (props) => {
  const {
    title,
    subtitle,
    description,
    items,
    navigationArrows,
    centerMode,
  } = props;

  const sliderRef = useRef(null);
  const [backArrowColor, setBackArrowColor] = useState(navigationArrows.arrowColor);
  const [nextArrowColor, setNextArrowColor] = useState(navigationArrows.arrowColor);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const { innerWidth } = window;

    if (innerWidth > 760) {
      setSlidesToShow(3);
    } else if (innerWidth <= 760 && innerWidth > 450) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  });

  const next = () => sliderRef.current.slickNext();
  const prev = () => sliderRef.current.slickPrev();

  return (
    <Container>
      <Title color={title.color} fontSize={title.fontSize}>
        {title.text}
      </Title>
      <Subtitle color={subtitle.color} fontSize={subtitle.fontSize}>
        {subtitle.text}
      </Subtitle>
      <Description color={description.color} fontSize={description.fontSize}>
        {description.text}
      </Description>
      <Carousel
        carouselRef={sliderRef}
        accessibility
        dots={false}
        infinite
        swipeToSlide
        swipe
        autoplay={false}
        arrows={false}
        speed={500}
        slidesToShow={slidesToShow}
        slidesToScroll={1}
        centerMode={centerMode}
      >
        {
          items.map((item) => {
            const priceFormatted = Dinero({
              amount: parseInt(item.price.cents, 10),
              currency: item.price.currency,
              precision: item.price.precision,
            }).toFormat();

            const { actionButton } = item;

            return (
              <Card key={Math.random.toString().substring(10)}>
                <ImageContainer>
                  <CardImage src={item.img.url} />
                </ImageContainer>
                <CardBody>
                  <ItemInfo>
                    <ItemTitle>{item.title.text}</ItemTitle>
                    <ItemDescription>{item.description.text}</ItemDescription>
                    <ItemPrice>
                      {priceFormatted}
                    </ItemPrice>
                  </ItemInfo>
                  <ItemControls>
                    <ActionButton
                      backgroundColor={actionButton?.backgroundColor}
                      color={actionButton?.color}
                      fontSize={actionButton?.fontSize}
                      onClick={actionButton?.callback}
                    >
                      {actionButton?.text}
                      {
                        actionButton?.icon?.isVisible && (
                          <CartIconContainer>
                            <CartIcon
                              color={actionButton.icon.color}
                              width="15px"
                              height="15px"
                            />
                          </CartIconContainer>
                        )
                      }
                    </ActionButton>
                  </ItemControls>
                </CardBody>
              </Card>
            );
          })
        }
      </Carousel>
      {
        navigationArrows.isVisible && items.length > slidesToShow && (
          <NavigationArrows>
            <Arrow
              onClick={prev}
              onMouseEnter={() => setBackArrowColor(navigationArrows.onHover.arrowColor)}
              onMouseLeave={() => setBackArrowColor(navigationArrows.arrowColor)}
              backgroundColor={navigationArrows.backgroundColor}
              onHoverBackgroundColor={navigationArrows.onHover.backgroundColor}
            >
              <ArrowIcon
                transform="rotate(-180)"
                color={backArrowColor}
              />
            </Arrow>
            <Arrow
              onClick={next}
              onMouseEnter={() => setNextArrowColor(navigationArrows.onHover.arrowColor)}
              onMouseLeave={() => setNextArrowColor(navigationArrows.arrowColor)}
              backgroundColor={navigationArrows.backgroundColor}
              onHoverBackgroundColor={navigationArrows.onHover.backgroundColor}
            >
              <ArrowIcon color={nextArrowColor} />
            </Arrow>
          </NavigationArrows>
        )
      }
    </Container>
  );
};

RecommendedItemsCardsCarousel.defaultProps = {
  title: {
    color: '#000',
    fontSize: 1,
    text: 'Lorem Ipsum',
  },
  subtitle: {
    color: '#000',
    fontSize: 1.9,
    text: 'Lorem Ipsum dolor sit amet.',
  },
  description: {
    color: '#000',
    fontSize: 1.1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  navigationArrows: {
    isVisible: true,
    backgroundColor: '#fff',
    arrowColor: '#000',
    onHover: {
      backgroundColor: '#000',
      arrowColor: '#fff',
    },
  },
  centerMode: false,
};

RecommendedItemsCardsCarousel.propTypes = {
  /**
   * Main title.
   */
  title: CustomTypes.TextType,
  /**
   * Secondary title.
   */
  subtitle: CustomTypes.TextType,
  /**
   * Description.
   */
  description: CustomTypes.TextType,
  /**
   * Items to show.
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    img: CustomTypes.ImageType,
    title: CustomTypes.TextType,
    description: CustomTypes.TextType,
    price: CustomTypes.MoneyType,
    /**
     * Call to Action Button.
     */
    actionButton: PropTypes.shape({
      backgroundColor: PropTypes.string,
      color: PropTypes.string,
      fontSize: PropTypes.number,
      text: PropTypes.string,
      callback: PropTypes.func,
      icon: PropTypes.shape({
        isVisible: PropTypes.bool,
        color: PropTypes.string,
      }),
    }),
  })).isRequired,
  navigationArrows: PropTypes.shape({
    isVisible: PropTypes.bool,
    backgroundColor: PropTypes.string,
    arrowColor: PropTypes.string,
    onHover: PropTypes.shape({
      backgroundColor: PropTypes.string,
      arrowColor: PropTypes.string,
    }),
  }),
  /**
   * Centers current card.
   */
  centerMode: PropTypes.bool,
};

export default RecommendedItemsCardsCarousel;
