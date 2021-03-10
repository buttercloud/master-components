// @flow
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  line-height: 1.3;
  font-weight: 900;
  color: ${(props) => props.color};
  text-transform: none;
`;
const Subtitle = styled.p`
  font-size: 1.1em;
  text-align: center;
  color: #fff;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 1.5;
  text-transform: none;
  white-space: pre-line;
  color: ${(props) => props.color};
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
  border-bottom: 3px solid ${(props) => props.borderColor};
  border-radius: 0rem;
  box-sizing: border-box;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.08);
  background-clip: border-box;
  background-color: ${(props) => props.backgroundColor};
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
  color: ${(props) => props.color};
  margin: 0px;
  font-size: 1.2em;
  font-weight: 600;
`;
const ActionLinkContainer = styled.div`
  margin: 2rem auto;
  clear: both;
  box-sizing: border-box;
  color: #ffffff;
`;
const ActionLink = styled.a`
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

const Menu02 = (props) => {
  const {
    logoUrl,
    title,
    titleColor,
    subtitle,
    subtitleColor,
    products,
    actionLinkText,
    fontFamily,
    productNameColor,
    productDescriptionColor,
    productPriceColor,
    productBoxColor,
    priceBoxColor,
    productBoxBorderColor,
    actionLinkHref,
    openActionLinkInNewTab,
    productOnClick,
    backgroundColor,
    actionLinkColor,
  } = props;

  const renderActionLink = () => {
    if (!actionLinkText) return null;

    return (
      <ActionLinkContainer>
        <ActionLink
          color={actionLinkColor}
          href={actionLinkHref}
          target={openActionLinkInNewTab ? '_blank' : '_self'}
        >
          {actionLinkText}
        </ActionLink>
      </ActionLinkContainer>
    );
  };

  return (
    <Container fontFamily={fontFamily} backgroundColor={backgroundColor}>
      <HeaderContainer>
        <Logo src={logoUrl} alt="" />
        <Title color={titleColor}>
          {title}
        </Title>
        <Subtitle color={subtitleColor}>
          {subtitle}
        </Subtitle>
      </HeaderContainer>
      <ProductsContainer>
        {
          products.map((product) => (
            <Product
              key={Math.random().toString().slice(10)}
              backgroundColor={productBoxColor}
              borderColor={productBoxBorderColor}
              onClick={() => productOnClick(product)}
            >
              <ProductName color={productNameColor}>
                {product.name}
              </ProductName>
              <ProductDescription color={productDescriptionColor}>
                {product.description}
              </ProductDescription>
              <PriceBox color={priceBoxColor}>
                <ProductPrice color={productPriceColor}>
                  {product.price}
                </ProductPrice>
              </PriceBox>
            </Product>
          ))
        }
      </ProductsContainer>
      {renderActionLink()}
    </Container>
  );
};

Menu02.defaultProps = {
  logoUrl: null,
  title: null,
  titleColor: '#fff',
  subtitle: null,
  subtitleColor: '#fff',
  actionLinkText: null,
  fontFamily: 'sans-serif',
  productNameColor: '#0F0F10',
  productDescriptionColor: '#000',
  productPriceColor: '#F4F0EA',
  productBoxColor: '#fff',
  priceBoxColor: '#28282A',
  productBoxBorderColor: '#c7a17a',
  actionLinkHref: null,
  openActionLinkInNewTab: true,
  backgroundColor: '#28282a',
  actionLinkColor: '#fff',
};

Menu02.propTypes = {
  /**
  * Logo.
  */
  logoUrl: PropTypes.string,
  /**
  * Menu title.
  */
  title: PropTypes.string,
  /**
  * Custom color for the menu title.
  */
  titleColor: PropTypes.string,
  /**
  * Menu subtitle
  */
  subtitle: PropTypes.string,
  /**
  * Custom color for the menu subtitle.
  */
  subtitleColor: PropTypes.string,
  /**
  * An array of products.
  * (`id` is optional)
  */
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  })).isRequired,
  /**
  * Callback when a product card is pressed, product data is passed down to it as an object.
  */
  productOnClick: PropTypes.func.isRequired,
  /**
  * Custom color of the product name.
  */
  productNameColor: PropTypes.string,
  /**
  * Custom color of the product description.
  */
  productDescriptionColor: PropTypes.string,
  /**
  * Custom color of the product price.
  */
  productPriceColor: PropTypes.string,
  /**
  * Background color of the product card.
  */
  productBoxColor: PropTypes.string,
  /**
  * Background color of the price box in the corner.
  */
  priceBoxColor: PropTypes.string,
  /**
  * Bottom border color of product box and price box.
  */
  productBoxBorderColor: PropTypes.string,
  /**
  * Text to display on the action link button. If no text is given the button will be hidden.
  */
  actionLinkText: PropTypes.string,
  /**
  * Url to open when action link is pressed.
  */
  actionLinkHref: PropTypes.string,
  /**
  * Toggle opening the action button link in a new-tab or the same tab.
  */
  openActionLinkInNewTab: PropTypes.bool,
  /**
  * Custom color for action link text.
  */
  actionLinkColor: PropTypes.string,
  /**
  * Font family of all text in the component.
  */
  fontFamily: PropTypes.string,
  /**
  * Custom background color.
  */
  backgroundColor: PropTypes.string,
};

export default Menu02;
