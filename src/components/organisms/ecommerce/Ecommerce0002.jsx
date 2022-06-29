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
import {
  StyledContainer,
  StyledImage,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledParagraph,
  StyledDiv,
  StyledAnchor,
} from '../../assets/customStyledComponents';

const Logo = styled(StyledImage)`
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
const Title = styled(StyledH3)`
  font-weight: 900;
  line-height: 1.3;
  text-transform: none;
`;
const Subtitle = styled(StyledParagraph)`
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
const Product = styled(StyledDiv)`
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
const ProductName = styled(StyledH4)`
  font-size: calc( (1.25rem) / 1.2);
  font-weight: 900;
  line-height: 1.25;
  text-transform: none;
  color: ${(props) => props.color};
  margin: 0;
`;
const ProductDescription = styled(StyledParagraph)`
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
  border-bottom-color: black; // for now until we make this customizable
  box-sizing: border-box;
`;
const ActionButtonContainer = styled.div`
  margin: 2rem auto;
  clear: both;
  box-sizing: border-box;
`;
const ActionButton = styled(StyledAnchor)`
  cursor: pointer;
  padding: 0.3rem 24px 0.3rem 0;
  position: relative;
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

const Ecommerce0002 = (props) => {
  const {
    logo,
    title,
    subtitle,
    products,
    actionButton,
    background,
  } = props;

  const defaults = {
    ...Ecommerce0002.defaultProps,
    ...DEFAULTS_FOR_REQUIRED,
  };

  return (
    <StyledContainer
      className="flex flex-col text-base w-full font-normal tracking-normal leading-normal normal-case justify-center items-center pt-5"
      customProps={background}
    >
      <div className="flex flex-col items-center">
        <Logo
          className="pb-2.5 max-h-24"
          customProps={logo}
          src={logo?.url}
          alt={logo?.alt}
        />
        <Title
          // className="font-black leading-snug normal-case" // not working for some reason
          customProps={title}
        >
          {title?.text}
        </Title>
        <Subtitle
          color={subtitle?.color || defaults.subtitle.color}
          fontSize={subtitle?.fontSize || defaults.subtitle.fontSize}
        >
          {subtitle?.text}
        </Subtitle>
      </div>
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
                customProps={product}
                backgroundColor={product.backgroundColor || defaults.product.backgroundColor}
                borderColor={product.borderBottomColor || defaults.product.borderBottomColor}
                onClick={() => product.onClick?.({ product })}
              >
                <ProductName customProps={product.name}>
                  {product.name?.text}
                </ProductName>
                <ProductDescription customProps={product.description}>
                  {product.description?.text}
                </ProductDescription>
                <PriceBox backgroundColor={product.price?.backgroundColor}>
                  <StyledH5
                    className="font-semibold m-0"
                    customProps={product.price}
                  >
                    {price}
                  </StyledH5>
                </PriceBox>
              </Product>
            );
          })
        }
      </ProductsContainer>
      {
        actionButton?.text && (
          <ActionButtonContainer>
            <ActionButton className="text-black" customProps={actionButton}>
              {actionButton?.text}
            </ActionButton>
          </ActionButtonContainer>
        )
      }
    </StyledContainer>
  );
};

Ecommerce0002.defaultProps = {
  logo: {
    url: null,
    alt: '',
  },
  title: {
    text: null,
    styles: {
      color: '#fff',
      fontSize: 1,
    },
  },
  subtitle: {
    text: null,
    styles: {
      color: '#fff',
      fontSize: 1,
    },
  },
  actionButton: {
    text: null,
    styles: {
      color: '#fff',
      fontSize: 1,
    },
  },
  background: {
    styles: {
      fontFamily: 'sans-serif',
      backgroundColor: '#28282a',
    },
  },
};

Ecommerce0002.propTypes = {
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

export default Ecommerce0002;
