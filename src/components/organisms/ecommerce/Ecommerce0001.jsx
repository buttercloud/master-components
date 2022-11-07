import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dinero from 'dinero.js';
import { textType, moneyType, backgroundType } from '../../../customPropTypes/customPropTypes';
import {
  StyledContainer,
  StyledParagraph,
  StyledH3,
  StyledH6,
  StyledSpan,
} from '../../assets/customStyledComponents';

const Subtitle = styled(StyledH6)`
  margin-top: 10px;
`;
const Products = styled.div`
  background-color: inherit;
`;
const Product = styled.div`
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
const ProductName = styled(StyledSpan)`
  background-color: inherit;
  z-index: 2;
`;
const ProductPrice = styled(StyledSpan)`
  margin-left: auto;
  background-color: inherit;
  z-index: 2;
`;
const ProductDescription = styled(StyledParagraph)`
  margin-left: 15px;
  margin-right: 15px;
`;

const Ecommerce0001 = (props) => {
  const {
    background,
    title,
    subtitle,
    products,
  } = props;

  return (
    <StyledContainer className="flex flex-col" customProps={background}>
      <StyledH3 className="w-full mb-0 text-center" customProps={title}>
        {title.text}
      </StyledH3>
      <Subtitle className="w-full" customProps={subtitle}>
        {subtitle.text}
      </Subtitle>
      <Products className="flex flex-wrap w-full">
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
                className="w-full"
              >
                <ProductHeader>
                  <ProductName className="text-[#2f3439] font-inherit text-sm" customProps={product.name}>
                    {product.name?.text}
                  </ProductName>
                  <ProductPrice className="text-[#2f3439] font-inherit text-sm" customProps={product.price}>
                    {price}
                  </ProductPrice>
                </ProductHeader>
                <ProductDescription className="text-[#9d9996] font-inherit text-base" customProps={product.description}>
                  {product.description?.text}
                </ProductDescription>
              </Product>
            );
          })
        }
      </Products>
    </StyledContainer>
  );
};

Ecommerce0001.defaultProps = {
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

Ecommerce0001.propTypes = {
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

export default Ecommerce0001;
