import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dinero from 'dinero.js';
import {
  textType,
  imageType,
  buttonType,
  moneyType,
} from '../../../customPropTypes/customPropTypes';

const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.backgroundColor};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: ${(props) => props.fontFamily};
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 1.5;
  text-transform: none;
  padding-top: 20px;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /*width: 100%;*/
`;
const Logo = styled.img`
  padding-bottom: 10px;
  max-height: 100px;
`;
const ProductsContainer = styled.div`
  display: flex;
  flex-basis: 0%;
  flex-wrap: wrap;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
  justify-content: center;
  word-break: break-word;
  overflow-wrap: break-word;
  color: #ffffff;
`;
const Title = styled.h3`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize}rem;
  font-weight: 900;
  line-height: 1.3;
  text-transform: none;
`;
const Subtitle = styled.p`
  text-align: center;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 1.5;
  text-transform: none;
  white-space: pre-line;
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize}rem;
  margin-top: 0;
`;
const Product = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.85rem 1.50rem 1.85rem;
  margin: 10px 1em;
  word-break: break-word;
  text-align: left;
  border: 0;
  border-bottom: 3px solid ${({ borderBottomColor }) => borderBottomColor};
  border-radius: 0rem;
  box-sizing: border-box;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.08);
  background-clip: border-box;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: #414143;
  cursor: pointer;

  max-height: 250px;
  width: 100%;
  @media (min-width: 767px) and (max-width: 991px) {
    width: 45%;
  }
  @media (min-width: 992px) {
    width: 28%;
  }

  will-change: transform;
  transition: all 0.2s ease-out;
  &:hover {
    transform: translate3d(0, -10px, 0);
    transition: all 0.2s ease-in;
  }
`;
const ProductName = styled.h4`
  font-size: calc( (1.25rem) / 1.2);
  font-weight: 900;
  line-height: 1.25;
  text-transform: none;
  color: ${(props) => props.color};
  margin: 0;
`;
const ProductDescription = styled.p`
  overflow: scroll;
  color: ${(props) => props.color};
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 1.5;
  text-transform: none;
  text-align: left;
`;
const PriceBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 8;
  padding: 5px 10px;
  background: ${(props) => props.color};
  pointer-events: none;
  border-bottom: 3px solid #c7a17a;
  box-sizing: border-box;
`;
const ProductPrice = styled.h5`
  margin: 0px;
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize}rem;
  font-weight: 600;
`;
const ActionButtonContainer = styled.div`
  margin: 2rem auto;
  clear: both;
  box-sizing: border-box;
  color: #ffffff;
`;
const ActionButton = styled.a`
  cursor: pointer;
  padding: 0.3rem 24px 0.3rem 0;
  position: relative;
  color: ${(props) => props.color} !important;
  text-transform: uppercase;
  transition: all 0.35s cubic-bezier(0.215, 0.61, 0.355, 1); // TODO: not working
  box-shadow: none !important;
  display: inline-block;
  font-weight: 700;
  font-size: 0.95rem;
  text-align: inherit;
  white-space: normal;
  vertical-align: middle;
  user-select: none;
  text-decoration: none !important;
  background: none;
  border-radius: 0;
  outline: none !important;
  overflow-wrap: break-word;
  box-sizing: border-box;
  background-color: transparent !important;
  &:before {
    text-rendering: auto;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    content: '→';
    position: absolute;
    top: 0.3em;
    background-color: transparent !important;
    color: inherit !important;
    right: 0;
    font-size: 1.3em;
    float: right;
    display: inline-block;
    transition: inherit;
    box-sizing: border-box;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -0.2em;
    width: 100%;
    height: 2px;
    background-color: currentColor;
    z-index: 1;
    opacity: 0.75;
    transition: inherit;
  }
`;

const DEFAULTS_FOR_REQUIRED = {
  product: {
    backgroundColor: '#fff',
    borderBottomColor: '#c7a17a',
    name: {
      color: '#0F0F10',
    },
    description: {
      color: '#000',
    },
    price: {
      color: '#000',
      borderBottomColor: '#F4F0EA',
      backgroundColor: '#28282A',
      fontSize: 1.2,
    },
  },
};

const GridMenuWithItemCards = (props) => {
  const {
    logo,
    title,
    subtitle,
    products,
    actionButton,
    background,
  } = props;

  const defaults = {
    ...GridMenuWithItemCards.defaultProps,
    ...DEFAULTS_FOR_REQUIRED,
  };

  const renderActionButton = () => {
    if (!actionButton?.text) return null;

    return (
      <ActionButtonContainer>
        <ActionButton
          color={actionButton?.color || defaults.actionButton.color}
          fontSize={actionButton?.fontSize || defaults.actionButton.fontSize}
          onClick={actionButton?.onClick}
        >
          {actionButton?.text}
        </ActionButton>
      </ActionButtonContainer>
    );
  };

  return (
    <Container fontFamily={background?.fontFamily} backgroundColor={background?.backgroundColor}>
      <HeaderContainer>
        <Logo src={logo?.url} alt={logo?.alt} />
        <Title
          color={title?.color || defaults.title.color}
          fontSize={title?.fontSize || defaults.title.fontSize}
        >
          {title?.text}
        </Title>
        <Subtitle
          color={subtitle?.color || defaults.subtitle.color}
          fontSize={subtitle?.fontSize || defaults.subtitle.fontSize}
        >
          {subtitle?.text}
        </Subtitle>
      </HeaderContainer>
      <ProductsContainer>
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
              <Product
                key={product.id || Math.random().toString().slice(10)}
                backgroundColor={product.backgroundColor || defaults.product.backgroundColor}
                borderColor={product.borderBottomColor || defaults.product.borderBottomColor}
                onClick={() => product.onClick?.({ product })}
              >
                <ProductName
                  color={product.name?.color || defaults.product.name.color}
                  fontSize={product.name?.fontSize || defaults.product.name.fontSize}
                >
                  {product.name?.text}
                </ProductName>
                <ProductDescription
                  color={product.description?.color || defaults.product.description.color}
                  fontSize={product.description?.fontSize || defaults.product.description.fontSize}
                >
                  {product.description?.text}
                </ProductDescription>
                <PriceBox backgroundColor={product.price?.backgroundColor}>
                  <ProductPrice
                    color={product.price?.color || defaults.product.price.color}
                    fontSize={product.price?.fontSize || defaults.product.price.fontSize}
                  >
                    {price}
                  </ProductPrice>
                </PriceBox>
              </Product>
            );
          })
        }
      </ProductsContainer>
      {renderActionButton()}
    </Container>
  );
};

GridMenuWithItemCards.defaultProps = {
  logo: {
    url: null,
    alt: '',
  },
  title: {
    text: null,
    color: '#fff',
    fontSize: 1,
  },
  subtitle: {
    text: null,
    color: '#fff',
    fontSize: 1,
  },
  actionButton: {
    text: null,
    color: '#fff',
    fontSize: 1,
  },
  background: {
    fontFamily: 'sans-serif',
    backgroundColor: '#28282a',
  },
};

GridMenuWithItemCards.propTypes = {
  /**
   * Logo.
   */
  logo: imageType,
  /**
   * Menu title.
   */
  title: textType,
  /**
   * Menu subtitle
   */
  subtitle: textType,
  /**
   * Background
   */
  background: PropTypes.shape({
    /**
     * Font family of all text in the component.
     */
    fontFamily: PropTypes.string,
    /**
     * Custom background color.
     */
    backgroundColor: PropTypes.string,
  }),
  actionButton: buttonType,
  /**
   * An array of products.
   * (`id` is optional)
   */
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: textType.isRequired,
    description: textType.isRequired,
    price: PropTypes.shape({
      ...moneyType,
      /**
       * Bottom border color of product box and price box.
       */
      borderBottomColor: PropTypes.string,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
    /**
     * Background color of the product card.
     */
    backgroundColor: PropTypes.string,
  })).isRequired,
};

export default GridMenuWithItemCards;
