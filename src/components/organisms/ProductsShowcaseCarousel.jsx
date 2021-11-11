import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dinero from 'dinero.js';
import Carousel from '../molecules/Carousel';
import {
  textType,
  imageType,
  buttonType,
  moneyType,
  backgroundType,
} from '../../customPropTypes/customPropTypes';
import {
  StyledContainer,
  StyledParagraph,
  StyledH1,
  StyledH4,
  StyledH5,
} from '../assets/customStyledComponents';

const ONE_SLIDE_BREAKPOINT = 500;
const THREE_SLIDES_BREAKPOINT = 760;

const Container = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ShowcasedProduct = styled.div`
  display: flex !important;
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 15px 0;
`;
const ProductInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 30px;
  @media (max-width: ${ONE_SLIDE_BREAKPOINT}px) {
    width: 90%;
    padding: 0;
  }
`;
const ProductImageBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media (max-width: ${ONE_SLIDE_BREAKPOINT}px) {
    width: 90%;
  }
`;
const Name = styled(StyledH1)`
  width: 100%;
  text-align: left;
  font-size: 62px;
  margin-bottom: 20px;
`;
const Image = styled.img`
  max-width: 100%;
`;
const Description = styled(StyledParagraph)`
  width: 100%;
  text-align: left;
  font-size: 25px;
  margin-bottom: 25px;
`;
const ButtonAndPrice = styled.div`
  display: flex;
  align-items: center;
`;
const ActionButton = styled.button`
  border: 0;
  cursor: pointer;
  text-align: center;
  padding: 12px 30px;
  border-radius: 25px;
  box-shadow: 4px 3px 24px rgba(0, 0, 0, .5);
  &:active {
    transform: translateY(2px);
    filter: saturate(150%);
  }
`;
const Price = styled(StyledH4)`
  margin: 0 0 0 40px;
`;
const ProductCard = styled.div`
  display: flex !important;
  justify-content: center;
  flex-direction: row;
  width: auto !important;
  min-height: 200px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin: 0 15px;
  padding: 20px;
  border: 0;
  box-shadow: 0 3px 12px 0 rgba(25, 31, 33, 0.1);
  border-radius: 8px;
  cursor: pointer;
`;
const CardImageBlock = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;
const CardInfo = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
`;
const CardName = styled(StyledH5)`
  margin: 0 0 5px 0;
  width: 100%;
  text-align: ${({ textAlign }) => textAlign};
`;
const CardPrice = styled(StyledParagraph)`
  margin: 0;
  width: 100%;
  text-align: ${({ textAlign }) => textAlign};
`;
const SmallSlider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ProductsShowcaseCarousel = (props) => {
  const { background, products, productCard } = props;

  const bigSliderRef = useRef(null);
  const smallSliderRef = useRef(null);

  const [slidesToShow, setSlidesToShow] = useState(3);
  const [cachedInnerWidth, setCachedInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const { innerWidth } = window;

      if (innerWidth === cachedInnerWidth) return;

      if (innerWidth > THREE_SLIDES_BREAKPOINT) {
        setSlidesToShow(3);
      } else if (innerWidth <= THREE_SLIDES_BREAKPOINT && innerWidth > ONE_SLIDE_BREAKPOINT) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }

      setCachedInnerWidth(innerWidth);
    };

    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  return (
    <Container
      backgroundColor={background.backgroundColor}
    >
      <Carousel
        asNavFor={smallSliderRef}
        carouselRef={bigSliderRef}
        accessibility
        dots={false}
        infinite
        swipeToSlide
        swipe
        autoplay={false}
        arrows={false}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        centerMode={false}
      >
        {
          products?.map((product) => {
            let price = '';

            try {
              price = Dinero({
                amount: parseInt(product.price.cents, 10),
                currency: product.price.currency,
                precision: product.price.precision,
              }).toFormat();
            } catch (error) {
              console.error(error);
              // TODO
              // handle error
            }

            return (
              <ShowcasedProduct
                key={product.id}
                flexDirection={slidesToShow === 1 ? 'column-reverse' : 'row'}
              >
                <ProductInfoBlock>
                  <Name
                    fontFamily={product.name?.fontFamily}
                    fontSize={product.name?.fontSize}
                    textAlign={product.name?.textAlign}
                    color={product.name?.color}
                  >
                    {product.name?.text}
                  </Name>
                  <Description
                    fontFamily={product.description?.fontFamily}
                    fontSize={product.description?.fontSize}
                    textAlign={product.description?.textAlign}
                    color={product.description?.color}
                  >
                    {product.description?.text}
                  </Description>
                  <ButtonAndPrice>
                    <ActionButton
                      fontFamily={product.actionButton?.fontFamily}
                      fontSize={product.actionButton?.fontSize}
                      textAlign={product.actionButton?.textAlign}
                      color={product.actionButton?.color}
                    >
                      {product.actionButton?.text}
                    </ActionButton>
                    <Price
                      fontFamily={product.name?.fontFamily}
                      fontSize={product.name?.fontSize}
                      textAlign={product.name?.textAlign}
                      color={product.name?.color}
                    >
                      {price}
                    </Price>
                  </ButtonAndPrice>
                </ProductInfoBlock>
                <ProductImageBlock>
                  <Image src={product.image?.src} alt={product.image?.alt || ''} />
                </ProductImageBlock>
              </ShowcasedProduct>
            );
          })
        }
      </Carousel>
      {
        products?.length > 1 && (
          <SmallSlider>
            <Carousel
              asNavFor={bigSliderRef}
              carouselRef={smallSliderRef}
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
              centerMode={false}
            >
              {
                products?.map((product) => {
                  let price = '';

                  try {
                    price = Dinero({
                      amount: parseInt(product.price.cents, 10),
                      currency: product.price.currency,
                      precision: product.price.precision,
                    }).toFormat();
                  } catch (error) {
                    console.error(error);
                    // TODO
                    // handle error
                  }

                  return (
                    <ProductCard
                      key={product.id}
                      backgroundColor={productCard.backgroundColor}
                    >
                      <CardImageBlock>
                        <Image src={product.image?.src} alt={product.image?.alt || ''} />
                      </CardImageBlock>
                      <CardInfo>
                        <CardName
                          fontFamily={product.name?.fontFamily}
                          fontSize={product.name?.fontSize}
                          textAlign={product.name?.textAlign}
                          color={product.name?.color}
                        >
                          {product.name?.text}
                        </CardName>
                        <CardPrice
                          fontFamily={product.price?.fontFamily}
                          fontSize={product.price?.fontSize}
                          textAlign={product.price?.textAlign}
                          color={product.price?.color}
                        >
                          {price}
                        </CardPrice>
                      </CardInfo>
                    </ProductCard>
                  );
                })
              }
            </Carousel>
          </SmallSlider>
        )
      }
    </Container>
  );
};

ProductsShowcaseCarousel.defaultProps = {
  background: {
    backgroundColor: 'white',
    fontFamily: 'inherit',
    fontSize: 1,
  },
  productCard: {
    backgroundColor: '#f9f9f9',
  },
};

ProductsShowcaseCarousel.propTypes = {
  /**
   * Styling for background
   */
  background: backgroundType,
  /**
   * A list of Products.
   */
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: textType.isRequired,
    description: textType,
    image: imageType,
    price: moneyType,
    actionButton: buttonType,
  })).isRequired,
  /**
   * Styling for bottom product cards
   */
  productCard: backgroundType,
};

export default ProductsShowcaseCarousel;
