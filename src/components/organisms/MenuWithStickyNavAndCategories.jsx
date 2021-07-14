import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dinero from 'dinero.js';
import CartButton from '../atoms/CartButton';
import {
  textType,
  imageType,
  buttonType,
  moneyType,
} from '../../customPropTypes/customPropTypes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /*scroll-behaviour: smooth;*/
  position: relative;
`;
const InnerContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-self: center;
  min-height: 200px;
`;
const NavigatorContainer = styled.div`
  display: flex;
  flex: 0.15;
  flex-direction: column;
  justify-content: flex-start;
  padding-right: 10px;
`;
const Navigator = styled.nav`
  display: block;
  position: sticky;
  top: 0;
`;
const MenuTitle = styled.h2`
  margin-top: 0px;
`;
const UnorderedList = styled.ul`
  padding: 0px;
  list-style-type: none;
  font-size: 1.2rem;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
  line-height: 1.5;
  text-align: left;
`;
const MenuHyperlink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize}rem;
`;
const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.85;
`;
const CategoryTitle = styled.h2`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize}rem;
`;
const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ProductCard = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  width: 250px;
  margin-right: 10px;
  margin-left: 10px;
  font-family: 'Public Sans', sans-serif;
`;
const ProductImage = styled.img`
  min-width: 100%;
  max-width: 100%;
  height: auto;
`;
const ProductInfo = styled.div`
  margin-top: 15px;
`;
const ProductName = styled.h4`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize}rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  margin-top: 0;
`;
const ProductPrice = styled.span`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize}rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
`;
const ProductDescription = styled.h5`
  min-height: 25px;
  max-height: 2rem;
  line-height: 1rem;
  display: block;
  overflow: hidden;
  margin-top: 15px;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: ${({ fontSize }) => fontSize}rem;
  color: ${({ color }) => color};
  text-align: left;
`;
const CartIconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const DEFAULTS_FOR_REQUIRED = {
  category: {
    name: {
      color: '#000',
      fontSize: 1.5,
    },
  },
  product: {
    name: {
      color: '#000',
      fontSize: 1.2,
    },
    price: {
      color: 'palevioletred',
      fontSize: 1,
    },
    description: {
      color: '#acabab',
      fontSize: 0.9,
    },
  },
};

const MenuWithStickyNavAndCategories = (props) => {
  const {
    categories,
    cartButton,
    categoryNameLinkStyle,
  } = props;

  const defaults = {
    ...MenuWithStickyNavAndCategories.defaultProps,
    ...DEFAULTS_FOR_REQUIRED,
  };

  const NavBlock = () => (
    <NavigatorContainer>
      <Navigator>
        <MenuTitle>Menu</MenuTitle>
        <UnorderedList>
          {
            categories?.map((category) => (
              <ListItem key={category.name?.text}>
                <MenuHyperlink
                  href={`#${category.name?.text}`}
                  color={categoryNameLinkStyle.color || defaults.categoryNameLinkStyle.color}
                  fontSize={
                    categoryNameLinkStyle.fontSize
                    || defaults.categoryNameLinkStyle.fontSize
                  }
                >
                  {category.name?.text}
                </MenuHyperlink>
              </ListItem>
            ))
          }
        </UnorderedList>
      </Navigator>
    </NavigatorContainer>
  );

  const ProductsBlock = () => (
    <ProductsContainer>
      {
        categories?.map((category) => (
          <>
            <CategoryTitle
              id={category.name?.text}
              color={category.name?.color || defaults.category.name.color}
              fontSize={category.name?.fontSize || defaults.category.name.fontSize}
            >
              {category.name.text}
            </CategoryTitle>
            <ProductsList id={`#${category.name.text}`}>
              {
                category.products.map((product) => {
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
                    <ProductCard onClick={product.onClick}>
                      <ProductImage src={product.image?.src} alt={product.image?.alt} />
                      <ProductInfo>
                        <ProductName
                          color={product.name.color || defaults.product.name.color}
                          fontSize={product.name.fontSize || defaults.product.name.fontSize}
                        >
                          {product.name.text}
                        </ProductName>
                        <ProductPrice
                          color={product.price.color || defaults.product.price.color}
                          fontSize={product.price.fontSize || defaults.product.price.fontSize}
                        >
                          {price}
                        </ProductPrice>
                        <ProductDescription
                          color={product.description.color || defaults.product.description.color}
                          fontSize={
                            product.description.fontSize
                            || defaults.product.description.fontSize
                          }
                        >
                          {product.description.text}
                        </ProductDescription>
                      </ProductInfo>
                    </ProductCard>
                  );
                })
              }
            </ProductsList>
          </>
        ))
      }
    </ProductsContainer>
  );

  return (
    <Container>
      <InnerContainer>
        <NavBlock />
        <ProductsBlock />
        <CartIconContainer>
          <CartButton
            iconColor={cartButton.icon?.color || defaults.cartButton.icon.color}
            badgeColor={cartButton.badge?.color || defaults.cartButton.badge.color}
            badgeNumber={cartButton.badge?.number}
          />
        </CartIconContainer>
      </InnerContainer>
    </Container>
  );
};

MenuWithStickyNavAndCategories.defaultProps = {
  cartButton: {
    icon: {
      color: '#000',
    },
    badge: {
      color: '#000',
      number: '',
    },
  },
  categoryNameLinkStyle: {
    color: 'gray',
    fontSize: 1.2,
  },
};

MenuWithStickyNavAndCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: textType.isRequired,
    products: PropTypes.arrayOf(PropTypes.shape({
      name: textType,
      image: imageType,
      description: textType,
      price: moneyType,
      onClick: PropTypes.func.isRequired,
    })),
  })).isRequired,
  cartButton: PropTypes.shape({
    ...buttonType,
    icon: PropTypes.shape({
      color: PropTypes.string,
    }),
    badge: PropTypes.shape({
      color: PropTypes.string,
      number: PropTypes.number,
    }),
  }),
  categoryNameLinkStyle: {
    color: PropTypes.string,
    fontSize: PropTypes.number,
  },
};

export default MenuWithStickyNavAndCategories;
