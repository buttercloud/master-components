import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dinero from 'dinero.js';
import { textType, moneyType, backgroundType } from '../../customPropTypes/customPropTypes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}rem;
`;
const Title = styled.h3`
  width: 100%;
  margin-bottom: 0;
  color: ${({ color }) => color};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}rem;
  text-align: ${({ textAlign }) => textAlign};
`;
const Subtitle = styled.h6`
  width: 100%;
  margin-top: 10px;
  color: ${({ color }) => color};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}rem;
  text-align: ${({ textAlign }) => textAlign};
`;
const Products = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: inherit;
`;
const Product = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
  background-color: inherit;
`;
const ProductHeader = styled.p`
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 15px;
  margin-right: 15px;
  background-color: inherit;

  &:before {
    content: '';
    position: absolute;
    bottom: .4rem;
    width: 100%;
    height: 0;
    line-height: 0;
    border-bottom: 2px dotted #ddd;
  }
`;
const StyledSpan = styled.span`
  color: ${({ color }) => color};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}rem;
  background-color: inherit;
  z-index: 2;
`;
const ProductName = styled(StyledSpan)``;
const ProductPrice = styled(StyledSpan)`
  margin-left: auto;
`;
const ProductDescription = styled.p`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize}rem;
  text-align: ${({ textAlign }) => textAlign};
  margin-left: 15px;
  margin-right: 15px;
`;

const DEFAULTS = {
  product: {
    name: {
      fontFamily: 'inherit',
      fontSize: 0.9,
      color: '#2f3439',
    },
    price: {
      fontFamily: 'inherit',
      fontSize: 0.9,
      color: '#2f3439',
    },
    description: {
      fontFamily: 'inherit',
      fontSize: 1,
      color: '#9d9996',
    },
  },
};

const ClassicMenu = (props) => {
  const {
    background,
    title,
    subtitle,
    products,
  } = props;

  return (
    <Container
      backgroundColor={background?.backgroundColor}
      fontSize={background?.fontSize || ClassicMenu.defaultProps.background.fontSize}
      fontFamily={background?.fontFamily || ClassicMenu.defaultProps.background.fontFamily}
    >
      <Title
        fontFamily={title.fontFamily || ClassicMenu.defaultProps.title.fontFamily}
        fontSize={title.fontSize || ClassicMenu.defaultProps.title.fontSize}
        textAlign={title.textAlign || ClassicMenu.defaultProps.title.textAlign}
        color={title.color || ClassicMenu.defaultProps.title.color}
      >
        {title.text}
      </Title>
      <Subtitle
        fontFamily={subtitle.fontFamily || ClassicMenu.defaultProps.subtitle.fontFamily}
        fontSize={subtitle.fontSize || ClassicMenu.defaultProps.subtitle.fontSize}
        textAlign={subtitle.textAlign || ClassicMenu.defaultProps.subtitle.textAlign}
        color={subtitle.color || ClassicMenu.defaultProps.subtitle.color}
      >
        {subtitle.text}
      </Subtitle>
      <Products>
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
              <Product key={product.id || Math.random().toString().slice(10)}>
                <ProductHeader>
                  <ProductName
                    fontFamily={product.name?.fontFamily || DEFAULTS.product.name.fontFamily}
                    fontSize={product.name?.fontSize || DEFAULTS.product.name.fontSize}
                    color={product.name?.color || DEFAULTS.product.name.color}
                  >
                    {product.name?.text}
                  </ProductName>
                  <ProductPrice
                    fontFamily={product.price?.fontFamily || DEFAULTS.product.price.fontFamily}
                    fontSize={product.price?.fontSize || DEFAULTS.product.price.fontSize}
                    color={product.price?.color || DEFAULTS.product.price.color}
                  >
                    {price}
                  </ProductPrice>
                </ProductHeader>
                <ProductDescription
                  fontFamily={product.description?.fontFamily
                    || DEFAULTS.product.description.fontFamily}
                  fontSize={product.description?.fontSize || DEFAULTS.product.description.fontSize}
                  color={product.description?.color || DEFAULTS.product.description.color}
                >
                  {product.description?.text}
                </ProductDescription>
              </Product>
            );
          })
        }
      </Products>
    </Container>
  );
};

ClassicMenu.defaultProps = {
  background: {
    fontFamily: 'inherit',
    backgroundColor: 'white',
  },
  title: {
    text: '',
    fontSize: 1.1,
    color: '#2f3439',
    textAlign: 'center',
  },
  subtitle: {
    text: '',
    fontSize: 0.8,
    textAlign: 'center',
    color: '#2f3439',
  },
};

ClassicMenu.propTypes = {
  /**
   * Background styling
   */
  background: backgroundType,
  /**
   * Title.
   */
  title: textType,
  /**
   * Subtitle.
   */
  subtitle: textType,
  /**
   * A list of products.
   */
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: textType.isRequired,
    description: textType.isRequired,
    price: PropTypes.shape({
      ...moneyType,
    }).isRequired,
  })).isRequired,
};

export default ClassicMenu;
